import express from "express";
import cors from "cors";

import { PORT } from "./config/config.js";
import crudRoutes from "./routes/crud.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(crudRoutes);
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
