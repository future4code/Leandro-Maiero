import {Request, Response} from "express"
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator} from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";



export async function signup (req:Request, res: Response) {
    try{
      const{name, email, password} = req.body
      
      if (!name || !email || !password){
          res.status(422).send(
              "Insira corretamente as informações de 'name', 'email' e 'password'."
              );
      }




     const userDatabase = new UserDatabase();
     const user = await userDatabase.findUserByEmail(email);
     
     if (user) {
         res.status(409).send ('Email já cadastrado!');
     }
     const idGenerator = new IdGenerator();
     const id = idGenerator.generate()
     

     const hashManager = new HashManager()
     const hashPassword = await hashManager.hash(password)

     const newUser = new User (id, name, email, hashPassword)
     await userDatabase.createUser(newUser);

    const authenticator = new Authenticator() 
    const token = authenticator.generate({id})

    res.status(200).send({message:'Usuário criado com sucesso', token: token})

    }catch (error) {
        res.status(400).send(error.message);
    }
    
}