import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {apiRouter} from "./routes.ts";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());    

//Routes
app.use("/api", apiRouter);
//Error handling middleware


//Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});