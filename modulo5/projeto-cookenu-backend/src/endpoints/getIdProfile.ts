import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getIdProfile = async (req: Request, res: Response): Promise<void> => {

    const token = req.headers.authorization as string
    const id = req.params.id

    try {

        if (!token) {
            res.status(401).send("Para realizar essa operação é necessário ter token de autorização")
        }

        const authentication = new Authenticator()
        authentication.getTokenData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(id)

        const result = { id: user.getId(), name: user.getName(), email: user.getEmail() }

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.message);
    }
}