import { Request, Response } from 'express';
import { UserAplication } from "../../application/useCases/User.Application";
import { MysqlRepository } from "../dataAccess/mysql.repository";

const mysqlRepository = new MysqlRepository();
const userAppService = new UserAplication(mysqlRepository);

export class DeleteController {
    static deleteUser(req: Request, res: Response): void {
        const userId: number = parseInt(req.params.id, 10);
        
        userAppService.deleteUser(userId)
            .then(deletedUser => {
                res.status(200).json({
                    message: 'Usuario eliminado correctamente',
                    deletedUser: deletedUser
                });
            })
            .catch(error => {
                console.error('Hubo un error al eliminar el cliente:', error);
                res.status(500).json({
                    error: 'Hubo un error al eliminar el cliente'
                });
            });
    }
}

