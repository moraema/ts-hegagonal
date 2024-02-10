import { User } from '../entitites/user';


export interface UserRepository {
    createUser(user: User): Promise<any>;
    deleteUser(UserId: number): Promise<void>;
    getById(UserId: number): Promise<User[] | null>;
}