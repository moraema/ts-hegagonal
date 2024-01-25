import { Ventas } from "../../dominio/entities/ventas";
import { VentasRepository } from "../../dominio/repository/ventas.repository";

export class VentasApplication {
    constructor (private  ventasReposotiry: VentasRepository) {}

    async createVentas(ventas: Ventas): Promise<void>{
        await this.ventasReposotiry.createVenta(ventas);
    }

    async getVentas(id_cliente: number ): Promise<void> {
      await this.ventasReposotiry.getVentas(id_cliente);
    }

     async deleteVentas(id: number): Promise<any> {
     await this.ventasReposotiry.deleteVentas(id);
     }
}