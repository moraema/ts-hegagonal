import  express  from "express";
import { VentasController } from "../../../ventas/infrestructure/controller/ventas.controller";
import { ObtenerController } from "../../../ventas/infrestructure/controller/getventas";
import { EliminarController } from "../controller/delete.ventas";


export const router = express.Router();


router.post('/ventas', VentasController.createVenta);
router.get('/ventas/:id', ObtenerController.getVentas);
router.delete('/ventas/:id', EliminarController.deleteVentas);

export default router;
   