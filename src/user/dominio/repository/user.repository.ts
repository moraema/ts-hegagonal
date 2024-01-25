import { User } from '../entitites/user';


export interface UserRepository {
    createUser(user: User): Promise<void>;
    deleteUser(UserId: number): Promise<number>;
}