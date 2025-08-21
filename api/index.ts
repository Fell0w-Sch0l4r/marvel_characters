import express from "express";
import heroRouter from "./routes/heroRoutes"
import villainRouter from "./routes/villainRoutes";
const app = express();


app.use("/api/v1/heroes", heroRouter);
app.use("/api/v1/villains", villainRouter);
export default app;