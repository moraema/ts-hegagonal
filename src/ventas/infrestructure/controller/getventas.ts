import { Request, Response } from "express";
import { VentaRepository} from "../dataAccess/ventas.repository";



const ventasRepository = new VentaRepository();


export class ObtenerController {

    static getVentas(req: Request, res: Response): void {

        const id_cliente: number = parseInt(req.params.id, 10);
        
        ventasRepository.getVentas(id_cliente)
            .then(ventas => {
                res.status(200).json({
                    message: 'Se obtuvieron las ventas correctamente',
                    ventas
                });
            })
            .catch(error => {
                console.error('Hubo un error al obtener las ventas:', error);
                res.status(500).json({
                    error: 'Hubo un error al obtener las ventas'
                });
            });
    }

}

