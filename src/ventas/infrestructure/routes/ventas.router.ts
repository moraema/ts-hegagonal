import  express  from "express";
import { VentasController } from "../../../ventas/infrestructure/controller/ventas.controller";
import { ObtenerController } from "../../../ventas/infrestructure/controller/getventas";
import { EliminarController } from "../controller/delete.ventas";


export const router = express.Router();


router.post('/', VentasController.createVenta);
router.get('/:id', ObtenerController.getVentas);
router.delete('/:id', EliminarController.deleteVentas);

export default router;
   