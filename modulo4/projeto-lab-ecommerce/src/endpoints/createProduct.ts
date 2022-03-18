import { Request, Response } from "express";
import { connection } from "../data/connection"

export const createProduct = async (req: Request, res: Response):Promise<void> => {
    try {
        const {name, price, image_url} = req.body

        await connection("labecommerce_products")
        .insert({
            id: Date.now().toString(),
            name,
            price,
            image_url
        })

        res.status(200).send({message: "Produto cadastrado!"})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 