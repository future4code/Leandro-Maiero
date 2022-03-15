import {Request, Response} from 'express'
import PostBusiness from '../business/PostBusiness'
import { PostInputDTO } from '../model/Post'
import { SignupInputDTO } from '../model/User'

export default class PostController{
    userBusiness: any
    
    constructor(
        private postBusiness: PostBusiness
    ){}

    createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, date, type } = req.body
            const token = req.headers.authorization as string

            const input: PostInputDTO = {
                photo,
                description,
                date,
                type,
                
            }

            const tokenData = this.postBusiness.createPost(input)


            res.status(200).send({ message: "Post criado com sucesso", tokenData })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Error")
        }
    }

    getPostById = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.getPostById(input)

            res.status(200).send({ message: "Usuário cadastrado com sucesso", token })
        } catch (error: any) {
            if (error.message) return res.status(400).send(error.message)
            res.status(400).send("Error")
        }
    }
}