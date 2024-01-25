import { Request, Response } from "express";
import { ventaRepository} from "../dataAccess/ventas.repository";


const ventasRepository = new ventaRepository();


export class ObtenerController {
    static async getVentas(req: Request, res: Response): Promise<void> {
        try {
            const id_cliente: number = parseInt(req.params.id, 10);
            const ventas  = await ventasRepository.getVentas(id_cliente)
    
                res.status(200).json({
                    message: 'Se obtuvieron las ventas correctamente',
                    ventas
                });
            
            
        } catch (error) {
            console.error('Hubo un error al obtener las ventas:', error);
            res.status(500).json({
                error: 'Hubo un error al obtener las ventas'
            });
        }
    }
}

