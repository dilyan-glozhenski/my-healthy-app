import express from "express";
const router = express.Router();

// Define your user-related routes here
router.get("/", (req, res) => {
  res.send("User route is working!");
});

export default router;