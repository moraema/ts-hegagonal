import { Request, Response } from 'express';
import { UserAplication } from "../../application/useCases/User.Application";
import { MysqlRepository } from "../dataAccess/mysql.repository";
import { User } from "../../dominio/entitites/user";

const mysqlRepository = new MysqlRepository();
const userAppService = new UserAplication(mysqlRepository);


export class UserController {


  static async createUser (req: Request, res: Response): Promise<void>{
    try {
       const newUser: User = req.body;
       await userAppService.createUser(newUser);
       res.status(201).json({
           message: 'El usuario se creo exitosamente'
       });
    } catch ( error ) {
       res.status(500).json({
           error:'Hubo un error al crear el usuario'
       });
     }
    }
}







