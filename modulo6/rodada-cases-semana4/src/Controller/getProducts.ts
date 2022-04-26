import { Request, Response } from "express";
import { connection } from "../Data/BaseDatabase";
import { product, responseDB } from "../Model/products";

export default async function getProducts(req: Request, res: Response): Promise<void> {
    try {
        let message = 'Success'
        const id = req.query.id
        const name = req.query.name
        const tags = req.query.tags
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1;
        }
        let size = 5;
        let offset = size * (page - 1)
        let resultDB: responseDB[] = []
        if (!id && !name && !tags) {
            resultDB = await connection('amaroProducts')
                .select('*')
                .limit(size)
                .offset(offset)
        } else {
            resultDB = await connection('amaroProducts')
                .select('*')
                .where('name', 'like', `%${name}%`)
                .orWhere('tags', 'like', `%${tags}%`)
                .orWhere('id', `${id}`)
                .limit(size)
                .offset(offset)
        }
        if (!resultDB) {
            res.statusCode = 404
            message = 'Data not found'
            throw new Error(message)
        }
        const result = resultDB.map((item) => {
            return ({
                id: item.id,
                name: item.name,
                tags: item.tags.split(',')
            })
        })
        res.status(200).send({ message, page, result })
    } catch (error) {
        res.status(400).send(error.message || error.sqlMessage);
      }
}