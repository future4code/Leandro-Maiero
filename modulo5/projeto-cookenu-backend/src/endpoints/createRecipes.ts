import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { UserDatabase } from "../data/UserDatabase"
import { Recipes } from "../entities/Recipes"
import { Authenticator} from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const createRecipe = async (req: Request, res: Response): Promise<void> => {

    const { title, description }: { title: string, description: string } = req.body
    const token = req.headers.authorization as string
    

    try {

        if (!token) {
            res.status(401).send(
                "Necessita de um token para esta operação"
                )
        }

        if (!title || !description) {
            res.status(422).send(
                "Para cadastro de receita precisa informar: title e description."
                )
        }
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate()

        const authenticator = new Authenticator()
        const tokenAut = authenticator.getTokenData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(tokenAut.id)
        const userId = user.getId()
      
        const newRecipe =  new Recipes(id, userId, title, description)
        const recipeDatabase = new RecipeDatabase()
        recipeDatabase.registerRecipe(newRecipe)

        
        res.status(201).send({ 
            message: "Receita cadastrada com sucesso!", id, token
         })

    } catch (error) {
        res.status(400).send(error.message);
    }
}
