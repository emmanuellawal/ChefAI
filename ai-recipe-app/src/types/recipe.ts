export interface Ingredient {
  id: string;
  name: string;
  quantity: string | number;
  unit: string;
  notes?: string;
}

export interface RecipeStep {
  stepNumber: number;
  description: string;
}

export interface Recipe {
  id: string;
  title: string;
  description?: string;
  ingredients: Ingredient[];
  instructions: RecipeStep[];
  prepTime?: string;
  cookTime?: string;
  servings?: number;
  cuisine?: string;
  dietaryTags?: string[];
  imageUrl?: string;
  source: 'ai-generated' | 'user-saved' | 'api-fetched';
  notes?: string;
  createdAt: string; // Consider using Date type and formatting on display
} 