import { Request, Response } from "express";
import { VentasApplication } from "../../application/useCases/ventas.Application";
import { VentaRepository } from "../dataAccess/ventas.repository";
import { Ventas } from "../../dominio/entities/ventas";

const ventasRepository = new VentaRepository();
const ventaAppService = new VentasApplication(ventasRepository);

export class VentasController {

    static createVenta(req: Request, res: Response): void {
        const newVentas: Ventas = req.body;
        
        ventaAppService.createVentas(newVentas)
            .then(ventaCreada => {
                res.status(201).json({
                    message: 'La venta fue creada exitosamente',
                    venta: ventaCreada 
                });
            })
            .catch(error => {
                console.error('Hubo un error al crear la venta:', error);
                res.status(500).json({
                    error: 'Hubo un error al crear la venta'
                });
            });
    }
}
