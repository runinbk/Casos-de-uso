import { Router } from 'express';
import {
 getEmpleados,
 getEmpleado,
 createEmpleado,
 updateEmpleado,
 deleteEmpleado
} from "../controller/crud.js";
const router = Router();
router.get('/crud', getEmpleados);

router.get("/crud/:id",getEmpleado);

router.post("/crud",createEmpleado);

router.put("/crud/:id",updateEmpleado);

router.delete("/crud/:id",deleteEmpleado);
export default router
