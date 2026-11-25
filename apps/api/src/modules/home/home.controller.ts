import type {Request, Response} from 'express';
import {listHomeData, getMealPlanById} from './home.service.ts';   

export const getHomeData = (req: Request, res: Response): void => {
  const data = listHomeData();
  res.json(data);
}

export const getMealPlan = (req: Request, res: Response): void => {
  const { id } = req.params;
  const mealPlan = getMealPlanById(id);
  if (!mealPlan) {
    res.status(404).json({ error: 'Meal plan not found' });
    return;
  }
  res.json(mealPlan);
}