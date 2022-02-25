import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getUserProfile(req: Request, res: Response){
    try {
        const token = req.headers.authorization as string

        if(!token){
            res.status(422).send("Token inválido ou não passado nos headers")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase()
        const userById = await userDatabase.getUserById(tokenData.id)

        res.status(200).send(userById)
    } catch (error: any) {
        res.status(400).send(error.message)

    }
}