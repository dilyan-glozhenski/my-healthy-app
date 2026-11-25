export type Meal = {
  id: string;
  name: string;
  description: string;
};
export type MealPlan = {
  id: string;
  title: string;
  description?: string;
  meals?: Meal[];
  goal?: string;
  image?: string;
  calories?: number;
};