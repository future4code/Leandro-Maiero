import { Request, Response } from "express"
import { connection } from "../data/connection"



export default async function getUserByName(name:string):Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio WHERE name like '%${name}%'
   `)

   return result[0]
}

export const getUser = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name as string

      const user = await getUserByName(name)

      if(!user.length){
         res.statusCode = 404
         throw new Error("No user found!")
      }

      res.status(200).send(user)

   } catch (error) {
      if(error instanceof Error){
         res.send(error.message)
      }
   }
}