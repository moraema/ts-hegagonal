import { query } from "../../../database/db.config";
import { Ventas } from "../../dominio/entities/ventas";
import { VentasRepository } from "../../dominio/repository/ventas.repository";

export class VentaRepository implements VentasRepository{

  createVenta(ventas: Ventas): Promise<any> {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO venta (descripcion, subtotal, total, id_cliente) VALUES (?, ?, ?, ?)';
        const params = [ventas.descripcion, ventas.subtotal, ventas.total, ventas.id_cliente];

        query(sql, params)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                console.log('Error al crear la venta en MySQL: ', error);
                reject(error);
            });
    });
}



    async getVentas(id_cliente: number): Promise<Ventas[]> {
      const sql = 'SELECT * FROM venta WHERE id_cliente = ?';
      const params: any[] = [id_cliente];

      try {
        const [result]: any = await query(sql, params);
        console.log(result);
        return result;
      } catch ( error ) {
        console.log('Hubo un error al obtner las compras del cliente: ', error);
        throw error;

      }
    }

     async deleteVentas(id: number): Promise<any> {
        const sql = 'DELETE FROM venta WHERE id = ?;';
        const params = [id];

        try {
          const result = await query(sql, params);
         console.log('Se elimino la venta correctamente', result)
        } catch ( error ) {
          console.log('Error al eliminar al cliente', error)
          throw new Error('Error al eliminar la venta');
        }
    }
    
  }