import { Ventas } from "../../dominio/entities/ventas";
import { VentasRepository } from "../../dominio/repository/ventas.repository";

export class VentasApplication {
    constructor (private  ventasReposotiry: VentasRepository) {}

    async createVentas(ventas: Ventas): Promise<Ventas | null> {
      try {
          const ventaCreada = await this.ventasReposotiry.createVenta(ventas);
          return ventaCreada;
      } catch (error) {
          console.error('Error al crear la venta:', error);
          return null;
      }
  }
  

    async getVentas(id_cliente: number ): Promise<Ventas[] | null> {
       return await this.ventasReposotiry.getVentas(id_cliente);
    }

     async deleteVentas(id: number): Promise<any> {
      await this.ventasReposotiry.deleteVentas(id);
     }
}