import {Router} from 'express';
import {getHomeData, getMealPlan} from './home.controller.ts';

const router = Router();

router.get('/', getHomeData);
router.get('/meal-plans/:id', getMealPlan);

export default router;