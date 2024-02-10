import { query } from '../../../database/db.config';
import { User }  from '../../dominio/entitites/user';
import { UserRepository } from '../../dominio/repository/user.repository';




export class MysqlRepository implements UserRepository{

  
   createUser = async (usuario: User): Promise<any> => {
    const sql = 'INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)';
    const params = [usuario.usuario, usuario.contraseña]; 

    try {
       const result = await query(sql, params);
       return result;
     } catch (error) {
       console.error('Error al crear usuario en MySQL:', error);
       throw new Error('Error al crear usuario en MySQL');
     }
};


  async  deleteUser(UserId: number): Promise<void> {
      const sql = ' DELETE usuarios, venta FROM usuarios LEFT JOIN venta ON usuarios.id = venta.id_cliente WHERE usuarios.id = ?;'
      const params = [UserId];

      try {
        const result = await query(sql, params);
        console.log('Se elimino el cliente', result)
      } catch (error) {
        console.error('Error al crear usuario:', error);
        throw new Error('Error al crear usuario');
      }
    }


     async getById(userId: number): Promise <User[]> {
      const sql = 'SELECT usuario, contraseña FROM usuarios WHERE id = ?'
      const params: any[] = [userId];

      try {
        const [result]: any = await query(sql, params);
        return result;
      } catch ( error ) {
        console.log('Hubo un error al obtener al usuario');
        throw new Error('Error al obtener al usuario');
      }
     }
  }
  
