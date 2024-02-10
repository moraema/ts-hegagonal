
export interface BcryptContraseña {
    encriptarContraseña(contraseña: string): Promise<void>
}