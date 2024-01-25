import { Request, Response } from "express";
import { VentasApplication } from "../../application/useCases/ventas.Application";
import { ventaRepository} from "../dataAccess/ventas.repository";
import { Ventas } from "../../dominio/entities/ventas";

const ventasRepository = new ventaRepository();
const ventaAppService = new VentasApplication(ventasRepository);


export class VentasController {

    static async createVenta(req: Request, res: Response): Promise<void> {
        try {
            const newVentas: Ventas = req.body;
            await ventaAppService.createVentas(newVentas);
            res.status(201).json({
                message: 'La venta fue creada exitosamente'
            });
        } catch ( error ){
            res.status(500).json({
                error: 'Hubo un error al crear la venta'
            })
        }
    }
  }
