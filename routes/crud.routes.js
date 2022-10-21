import { Router } from "express";
import {
  getEmpleados,
  getEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
} from "../controller/GestionarEmpleados.js";
import {
  getUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../controller/GestionarUsuarios.js";
import {
  getCargos,
  getCargo,
  createCargo,
  deleteCargo,
} from "../controller/Cargo.js";
const router = Router();

/*---------Empleados-----------*/
router.get("/empledo", getEmpleados);

router.get("/empleado/:id", getEmpleado);

router.post("/empleado", createEmpleado);

router.put("/empleado/:id", updateEmpleado);

router.delete("/empleado/:id", deleteEmpleado);

/*-----------Usuarios-------------*/
router.get("/usuario", getUsuarios);
router.get("/usuario/:id", getUsuario);
router.post("/usuario", createUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usuario/:id", deleteUsuario);

/*-----------Cargos-------------*/
router.get("/cargo", getCargos);
router.get("/cargo/:id", getCargo);
router.post("/cargo", createCargo);
router.delete("/cargo/:id", deleteCargo);
export default router;
