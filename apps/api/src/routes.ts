import { Router } from "express";
import userRoutes from "./modules/users/users.routes.ts";
import homeRoutes from "./modules/home/home.routes.ts";

export const apiRouter = Router();

// Import and use your user routes
apiRouter.use("/users", userRoutes);
apiRouter.use("/home", homeRoutes);

