import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getLimitedUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let page = Number(req.query.page)

      let size = 5
      let offset = size * (page - 1)

      const result = await connection("aula48_exercicio")
         .limit(size)
         .offset(offset)

      if(!result.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(result)

   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}