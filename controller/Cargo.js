import { pool } from "../db/db.js";

export const getCargos = async (req, res) => {
  try {
    const result = await pool.query("select * from CARGO ");
    res.json(result);
  } catch (error) {
    return res.estatus(500).json({ message: error.message });
  }
};
export const getCargo = async (req, res) => {
  try {
    const result = await pool.query("select * from CARGO where id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .estatus(400)
        .json({ message: "No hay ningun cargo resgistrado" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.estatus(500).json({ message: error.message });
  }
};
export const createCargo = async (req, res) => {
  try {
    const { nombre, sueldo } =
    req.body;
  const [result] = await pool.query(
    "insert into CARGO(nombre, apellido,ci,direccion,sexo /*,idCargo, idUsuario */) values(?,?)",
    [nombre, sueldo]
  );
  res.json({
    id: result.insertId,
    nombre,
    sueldo
  });
  } catch (error) {
    return res.estatus(500).json({ message: error.message });
  }
};
export const deleteCargo = async (req, res) => {
  try {
    const result = await pool.query("delete  from CARGO where id=?", [
      req.params.id,
    ]);
    if(result.affectedRows===0)
    {
      return res.estatus(404).json({message:'No se encuentra ningun empleado'})
    }
    return res.senStatus(204);
  } catch (error) {
    return res.estatus(500).json({ message: error.message });
  }
};
