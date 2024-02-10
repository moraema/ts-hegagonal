import { Request, Response } from 'express';
import { UserAplication } from "../../application/useCases/User.Application";
import { MysqlRepository } from "../dataAccess/mysql.repository";
import { User } from "../../dominio/entitites/user";



const mysqlRepository = new MysqlRepository();
const userAppService = new UserAplication(mysqlRepository);


export class UserController {

  static createUser(req: Request, res: Response): void {
 
    

        
        const newUser: User = req.body;
   
    userAppService.createUser(newUser)
        .then(() => {
            res.status(201).json({
                message: 'El usuario se creó exitosamente',
                
            });
        })
        .catch(error => {
            console.error('Hubo un error al crear el usuario:', error);
            res.status(500).json({
                error: 'Hubo un error al crear el usuario'
            });
        });
    } 
}






