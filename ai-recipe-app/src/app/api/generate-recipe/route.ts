import { NextRequest, NextResponse } from 'next/server';
import { buildRecipeGenerationPrompt } from '@/lib/ai/promptBuilder';
import { generateRecipe } from '@/lib/ai/openaiService';

// Define an interface for the expected request body
interface GenerateRecipeRequest {
  ingredients: string[];
  dietaryRestrictions: string[];
  cuisinePreferences: string[];
  servings: number;
  mealType: string;
  customInstructions?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as GenerateRecipeRequest;
    
    // Validate required fields
    if (!body.ingredients || !Array.isArray(body.ingredients) || body.ingredients.length === 0) {
      return NextResponse.json({ error: 'Ingredients array is required and must not be empty.' }, { status: 400 });
    }
    
    if (!body.servings || typeof body.servings !== 'number' || body.servings <= 0) {
      return NextResponse.json({ error: 'Valid number of servings is required.' }, { status: 400 });
    }
    
    if (!body.mealType || typeof body.mealType !== 'string') {
      return NextResponse.json({ error: 'Meal type is required.' }, { status: 400 });
    }

    // Build the prompt for the recipe generation
    const prompt = buildRecipeGenerationPrompt({
      ingredients: body.ingredients,
      dietaryRestrictions: body.dietaryRestrictions || [],
      cuisinePreferences: body.cuisinePreferences || [],
      servings: body.servings,
      mealType: body.mealType,
      customInstructions: body.customInstructions
    });

    // Generate the recipe using the OpenAI service
    const recipe = await generateRecipe(prompt);
    
    if (!recipe) {
      return NextResponse.json({ error: 'Failed to generate recipe.' }, { status: 500 });
    }

    return NextResponse.json({ recipe });
    
  } catch (error: unknown) {
    console.error('[API generate-recipe] Error:', error);
    let errorMessage = 'Failed to generate recipe.';
    let statusCode = 500;

    if (error instanceof SyntaxError) { // JSON parsing error
      errorMessage = 'Invalid request body.';
      statusCode = 400;
    } else if (error instanceof Error) {
      // Check if it's an error from our openaiService (which might include status)
      if (error.message.startsWith('OpenAI API Error')) {
        errorMessage = error.message;
      } else {
        errorMessage = error.message;
      }
    }
    
    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
} 