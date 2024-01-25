import { Request, Response } from 'express';
import { UserAplication } from "../../application/useCases/User.Application";
import { MysqlRepository } from "../dataAccess/mysql.repository";

const mysqlRepository = new MysqlRepository();
const userAppService = new UserAplication(mysqlRepository);


export class DeleteController {

    static async deleteUser (req: Request, res: Response): Promise<void> {
      try {
        const userId: number = parseInt(req.params.id, 10);

        await userAppService.deleteUser(userId);
        res.status(200).json({
          message: 'Se elimino correctamente al cliente'
        });
      } catch (error) {
        res.status(500).json({
          error: 'Hubo un error al eliminar el cliente',
        })
      }
    }
}
