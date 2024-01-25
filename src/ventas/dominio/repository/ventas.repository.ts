import { Ventas } from "../entities/ventas";

export interface VentasRepository {
    createVenta(venta: Ventas): Promise<void>;
    getVentas(id_cliente: number ): Promise<Ventas[] | null>;
    deleteVentas(id: number): Promise<number>;
}