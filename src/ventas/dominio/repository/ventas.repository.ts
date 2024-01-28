import { Ventas } from "../entities/ventas";

export interface VentasRepository {
    createVenta(venta: Ventas): Promise<Ventas>;
    getVentas(id_cliente: number ): Promise<Ventas[]>;
    deleteVentas(id: number): Promise<void>;
}