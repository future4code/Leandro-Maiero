import { Request, Response } from "express";
import { connection } from "../data/connection"

export const createUser = async (req: Request, res: Response):Promise<void> => {
    try {
        const {name, email, password} = req.body

        await connection("labecommerce_users")
        .insert({
            id: Date.now().toString(),
            name,
            email,
            password
        })

        res.status(200).send({message: "Cadastrado com sucesso!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 