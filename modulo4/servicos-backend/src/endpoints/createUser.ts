import { Request, Response } from "express"
import { getAddressInfo } from "../services/getAddressInfo"
import { connection } from "../data/connection"

export const createUser = async (req: Request, res: Response) => {
    try {
        const { numero, cep, complemento } = req.body

        const address = await getAddressInfo(cep)

       
        const info = await connection("UsersAddress")
        .insert({
            cep,
            logradouro:address?.logradouro,
            numero,
            complemento,
            bairro:address?.bairro,
            cidade:address?.cidade,
            estado:address?.estado,
        })

        if(!address){
            throw new Error("ERROR")
        }

        res.status(201).send({message: "Endereço criado com sucesso!"})

    } catch (error:any) {
         res.send({ error, message: error.message })
     
        
    }
}