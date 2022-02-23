import { User } from "../entities/users";
import { ConnectionDataBase } from './connection'

export class UserDatabase extends ConnectionDataBase {
    private static tableName = "User"

    createUser = (input: User) => ConnectionDataBase
        .connection(UserDatabase.tableName).insert({
            id: input.getId(),
            name: input.getName(),
            email: input.getEmail(),
            role: input.getRole(),
            password: input.getPassword(),
        })
    getUserByEmail = (email: string) => ConnectionDataBase
        .connection(UserDatabase.tableName)
        .where("email", email)

    getUserById = (id: string) => ConnectionDataBase
        .connection(UserDatabase.tableName)
        .where("id", id)
}