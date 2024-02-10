import  express  from "express";
import { UserController } from "../controller/user.Controller";
import { DeleteController } from "../../../user/infrestructure/controller/delete.controller";
import {  ObtenerUser } from "../../infrestructure/controller/User.getById";
export const router = express.Router();


router.get('/:id', ObtenerUser.getById);
router.post('/', UserController.createUser);
router.delete('/:id', DeleteController.deleteUser);


export default router;