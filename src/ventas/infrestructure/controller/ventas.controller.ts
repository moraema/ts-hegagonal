import { Request, Response } from "express";
import { VentasApplication } from "../../application/useCases/ventas.Application";
import { VentaRepository } from "../dataAccess/ventas.repository";
import { Ventas } from "../../dominio/entities/ventas";
import { publicMessage } from "../cloudaqmqp/cloud.message";
import { connectToRabbitMQ } from "../../../cloudamqp/cloud.service";

const ventasRepository = new VentaRepository();
const ventaAppService = new VentasApplication(ventasRepository);

export class VentasController {

    static async createVenta(req: Request, res: Response): Promise<void> {
        const newVentas: Ventas = req.body;

        try {
            await ventaAppService.createVentas(newVentas);

            const channel = await connectToRabbitMQ();
           
            await publicMessage('ventas', { message: 'Venta creada', newVentas}, channel);

            res.status(201).json({
                message: 'La venta fue creada exitosamente',
                venta: newVentas
            });
        } catch (error) {
            console.error('Hubo un error al crear la venta:', error);
            res.status(500).json({
                error: 'Hubo un error al crear la venta'
            });
        }
    }
}
