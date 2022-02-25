
import {Request, Response} from "express"
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator} from "../services/Authenticator";
import { HashManager } from "../services/HashManager";




export async function loginUser (req:Request, res: Response) {
    try{
      const{email, password} = req.body;
      
      if (!email || !password){
          res.status(422).send(
              "Insira corretamente as informações de 'email' e 'password'."
              );
      }


     const userDatabase = new UserDatabase();
     const user = await userDatabase.findUserByEmail(email);
     
     if (!user) {
         res.status(409).send ('E-mail não cadastrado!');
     }
         

     const hashManager = new HashManager();
     const passwordIsCorrect = hashManager.compare(password, user.getPassword());

     if (!passwordIsCorrect){
         res.status(401).send('E-mail ou senha incorreta!')
     }    
     

    const authenticator = new Authenticator();
    const token = authenticator.generate({id: user.getId()});

    res.status(200).send({message:'Usuário logado com sucesso', token})

    }catch (error) {
        res.status(400).send(error.message);
    }
    
}