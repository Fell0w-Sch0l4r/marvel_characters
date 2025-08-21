import express from "express";
import heroRouter from "./routes/heroRoutes"
const app = express();


app.use("/api/v1/heroes", heroRouter);
export default app;