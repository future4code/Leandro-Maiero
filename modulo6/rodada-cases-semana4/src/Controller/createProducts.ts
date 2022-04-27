import { Request, Response } from "express";
import { connection } from "../Data/BaseDatabase";
import generateId from "../Services/idGeneration";

export default async function createProducts(req: Request, res: Response) {
    try {
        let message = " Product registered successfully"
        const name = req.body.name
        const tagsList = req.body.tags
        if (!name || !tagsList) {
            res.statusCode = 406
            message = 'All fields must be filled'
            throw new Error(message)
        }
        const id: string = generateId()
        const tags = tagsList.join()
        await connection('amaroProducts')
            .insert({
                id, name, tags
            })
        res.status(201).send(message)
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage);
      }
}