import { Request, Response } from "express";
import { VentasApplication } from "../../application/useCases/ventas.Application";
import { ventaRepository } from "../dataAccess/ventas.repository";

const ventasRepository = new ventaRepository();
const ventasAppService = new VentasApplication(ventasRepository);

export class EliminarController {

      static async deleteVentas ( req: Request, res: Response): Promise<void> {
        try {
            const id: number = parseInt(req.params.id, 10);

            await ventasAppService.deleteVentas(id);
            res.status(200).json({
                message: 'La venta fue eliminado correctamente'
            });
        }  catch (error) {
            res.status(500).json({
                error: 'hubo un error al eliminar al cliente',
            })
        }
      }
      
}