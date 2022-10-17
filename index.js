import express from "express";
import { PORT } from "./config.js";
import crudRoutes from  "./routes/crud.routes.js"
const app = express();
app.use(express.json())
app.use(crudRoutes);
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
