import { Request, Response } from "express";
import { connection } from "../data/connection"
import { products } from "../types";

export const getProducts = async (req: Request, res: Response):Promise<void> => {
    try {
        const products:products[] = await connection("labecommerce_products")
        .select()

        res.status(200).send({products: products})
    } catch (error:any) {
        res.send({error, message:error.message})
    }
} 