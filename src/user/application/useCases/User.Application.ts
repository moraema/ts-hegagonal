import { User } from '../../dominio/entitites/user';
import { UserRepository } from '../../dominio/repository/user.repository';

export class UserAplication {
    constructor(private userRepository: UserRepository){}

    async createUser(usuario: User): Promise<any>{
        return await this.userRepository.createUser(usuario);
    }

    async deleteUser(UserId: number): Promise<void>{
        return await this.userRepository.deleteUser(UserId);
        
    }
}