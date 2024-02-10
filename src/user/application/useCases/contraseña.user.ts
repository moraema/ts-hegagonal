import { BcryptContraseña } from "../../dominio/repository/bcrypt.contraseña";
import bcrypt from 'bcrypt';

export class UserContraseña {
    constructor(private bcryptContraseña: BcryptContraseña) {};

    async encriptarContraseña(contraseña: string): Promise<void>{
    const hashedcontraseña = await  bcrypt.hash(String(contraseña), 10);
    return await this.bcryptContraseña.encriptarContraseña(hashedcontraseña);
    }
}