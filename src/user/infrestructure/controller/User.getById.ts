import { Response, Request } from "express";
import { MysqlRepository } from "../dataAccess/mysql.repository";

const userRepository = new MysqlRepository();


export class ObtenerUser {

    static getById(req: Request, res: Response): void {

        const id: number = parseInt(req.params.id, 10);

        userRepository.getById(id)
         
        .then(user => {
            res.status(200).json({
                message: 'Se obtuvo correctamente al usuario',
                user
            });
        })
        .catch(error => {
            console.error('Hubo un error al obtener al usuario:', error);
            res.status(500).json({
                error: 'hubo un error al obtener al usuario',
            
            })
        }); 
    }
}