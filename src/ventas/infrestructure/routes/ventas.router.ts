import  express  from "express";
import { VentasController } from "../../../ventas/infrestructure/controller/ventas.controller";
import { ObtenerController } from "../../../ventas/infrestructure/controller/getventas";
import { EliminarController } from "../controller/delete.ventas";
import { accountLimiter } from "../../../peticiones/limit.peticion";

export const router = express.Router();


router.post('/',accountLimiter, VentasController.createVenta);
router.get('/:id', accountLimiter, ObtenerController.getVentas);
router.delete('/:id', EliminarController.deleteVentas);

export default router;
   