import  express  from "express";
import { UserController } from "../controller/user.Controller";
import { DeleteController } from "../../../user/infrestructure/controller/delete.controller";



export const router = express.Router();

router.post('/usuarios', UserController.createUser);
router.delete('/usuarios/:id', DeleteController.deleteUser);

export default router;