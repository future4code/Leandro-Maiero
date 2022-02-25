import { BaseDatabase } from "./BaseDatabase";
import { User } from "../entities/User";

export class UserDatabase extends BaseDatabase{
    getUserById(id: string) {
        throw new Error("Method not implemented.");
    }
    public async createUser(user: User){
        try{
            await BaseDatabase.connection("User").insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                
            })

        }catch(error){
        throw new Error(error.sqlMessage || error.message);
       }
    }



    public async findUserByEmail(email:string): Promise<User> {
        try{
          const user = await BaseDatabase.connection('User')
          .select('*')
          .where({email:email}); 


          return user[0] && User.toUserModel(user[0]);


        }catch(error){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getAllUsers(): Promise<User[]>{
        try{

            const users = await BaseDatabase.connection("User").select(
                "id",
                "name",
                "email",
                "password"
               
                );
            return users.map((user => User.toUserModel(user)))

        } catch(error){
            throw new Error(error.sqlMessage || error.message);
        }

        
    } 
}