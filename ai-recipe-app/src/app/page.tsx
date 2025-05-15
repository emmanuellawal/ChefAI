"use client";

import React, { useState } from 'react';
import { TagInput } from '@/components/ui/TagInput';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

const commonDietaryRestrictions = [
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'gluten-free', label: 'Gluten-Free' },
  { id: 'dairy-free', label: 'Dairy-Free' },
  { id: 'nut-free', label: 'Nut-Free' },
  { id: 'low-carb', label: 'Low-Carb' },
];

const mealTypes = [
  { value: '', label: 'Any Meal Type' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'snack', label: 'Snack' },
  { value: 'dessert', label: 'Dessert' },
];

export default function HomePage() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState<string[]>([]);
  const [otherDietaryRestriction, setOtherDietaryRestriction] = useState<string>('');
  const [cuisinePreferences, setCuisinePreferences] = useState<string[]>([]);
  const [numberOfServings, setNumberOfServings] = useState<number>(2);
  const [mealType, setMealType] = useState<string>('');

  const handleDietaryRestrictionChange = (restrictionId: string, checked: boolean) => {
    setSelectedDietaryRestrictions(prev => 
      checked ? [...prev, restrictionId] : prev.filter(item => item !== restrictionId)
    );
  };

  const handleGenerateRecipe = () => {
    const allDietaryRestrictions = [...selectedDietaryRestrictions];
    if (otherDietaryRestriction.trim()) {
      allDietaryRestrictions.push(otherDietaryRestriction.trim());
    }
    console.log('Generating recipe with:', {
      ingredients,
      dietaryRestrictions: allDietaryRestrictions,
      cuisinePreferences,
      servings: numberOfServings,
      mealType,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        What are your preferences?
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerateRecipe();
        }}
        className="space-y-8"
      >
        <section>
          <label htmlFor="ingredients-input" className="block text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Available Ingredients
          </label>
          <TagInput
            id="ingredients-input"
            tags={ingredients}
            setTags={setIngredients}
            placeholder="Type an ingredient and press Enter or comma..."
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            Add the ingredients you have on hand.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Dietary Restrictions
          </h2>
          <div className="space-y-2 mb-3">
            {commonDietaryRestrictions.map(restriction => (
              <Checkbox
                key={restriction.id}
                id={`diet-${restriction.id}`}
                label={restriction.label}
                checked={selectedDietaryRestrictions.includes(restriction.id)}
                onCheckedChange={(checked) => 
                  handleDietaryRestrictionChange(restriction.id, typeof checked === 'boolean' ? checked : false)
                }
              />
            ))}
          </div>
          <div>
            <label htmlFor="other-dietary-restriction" className="sr-only">
              Other dietary restriction
            </label>
            <Input 
              type="text"
              id="other-dietary-restriction"
              placeholder="Other (e.g., soy-free, low-fodmap)"
              value={otherDietaryRestriction}
              onChange={(e) => setOtherDietaryRestriction(e.target.value)}
              className="w-full sm:w-2/3"
            />
          </div>
           <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            Select any dietary needs or add your own.
          </p>
        </section>

        <section>
          <label htmlFor="cuisine-input" className="block text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Cuisine Preferences
          </label>
          <TagInput
            id="cuisine-input"
            tags={cuisinePreferences}
            setTags={setCuisinePreferences}
            placeholder="e.g., Italian, Mexican, Thai..."
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            List any cuisines you prefer.
          </p>
        </section>

        <section>
          <label htmlFor="servings-input" className="block text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Number of Servings
          </label>
          <Input
            id="servings-input"
            type="number"
            min="1"
            value={numberOfServings}
            onChange={(e) => setNumberOfServings(parseInt(e.target.value, 10) || 1)}
            className="w-24"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            How many people are you cooking for?
          </p>
        </section>

        <section>
          <label htmlFor="meal-type-select" className="block text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
            Meal Type
          </label>
          <Select
            id="meal-type-select"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            className="w-full sm:w-2/3"
          >
            {mealTypes.map(type => (
              <option key={type.value} value={type.value} >
                {type.label}
              </option>
            ))}
          </Select>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1.5">
            Optionally, specify a meal type.
          </p>
        </section>

        <div className="pt-4">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={ingredients.length === 0} 
          >
            Generate Recipe
          </Button>
        </div>
      </form>
    </div>
  );
}
