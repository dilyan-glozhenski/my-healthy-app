import data from './home.data.json' with { type: 'json' };
import type { MealPlan } from '../../../../../packages/shared/types.ts';

export function listHomeData(): typeof data {
  return data;
}

export function getMealPlanById(id: string): MealPlan | undefined {
  return data.mealPlans.find((mealPlan: MealPlan) => mealPlan.id === id);
}


