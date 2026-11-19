import { Router } from "express";
import userRoutes from "./modules/users/users.routes.ts";

export const apiRouter = Router();

// Import and use your user routes

apiRouter.use("/users", userRoutes);