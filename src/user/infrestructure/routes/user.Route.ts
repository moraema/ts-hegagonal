import  express  from "express";
import { UserController } from "../controller/user.Controller";
import { DeleteController } from "../../../user/infrestructure/controller/delete.controller";
import {  ObtenerUser } from "../../infrestructure/controller/User.getById";
import { LimiterCount } from "../../../peticiones/limit";
export const router = express.Router();


router.get('/:id', LimiterCount, ObtenerUser.getById);
router.post('/', LimiterCount,UserController.createUser);
router.delete('/:id', DeleteController.deleteUser);


export default router;