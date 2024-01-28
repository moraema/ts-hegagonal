import { Request, Response } from "express";
import { VentasApplication } from "../../application/useCases/ventas.Application";
import { VentaRepository } from "../dataAccess/ventas.repository";

const ventasRepository = new VentaRepository();
const ventasAppService = new VentasApplication(ventasRepository);

export class EliminarController {

    static deleteVentas(req: Request, res: Response): void {
        
            const id: number = parseInt(req.params.id, 10);
    
            ventasAppService.deleteVentas(id)
                .then(() => {
                    res.status(200).json({
                        message: 'La venta fue eliminada correctamente'
                    });
                })
                .catch(error => {
                    console.error('Hubo un error al eliminar la venta:', error);
                    res.status(500).json({
                        error: 'Hubo un error al eliminar la venta'
                    });
                });
    }
}