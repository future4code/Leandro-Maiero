import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getUserProfile(req: Request, res: Response): Promise<void>{

    try {
        const token = req.headers.authorization as string        

        if(!token){
            res.status(422).send(
                "Token inválido ou não passado nos headers"
                )
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(tokenData.id)

        const result = { 
            id: user.getId(), 
            name: user.getName(), 
            email: user.getEmail() }

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)

    }
}