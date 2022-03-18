import { Request, Response } from "express";
import { connection } from "../data/connection"

export const getUsers = async (req: Request, res: Response):Promise<void> => {
    try {
        const users = await connection("labecommerce_users")
        .select()

        res.status(200).send({users: users})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
}