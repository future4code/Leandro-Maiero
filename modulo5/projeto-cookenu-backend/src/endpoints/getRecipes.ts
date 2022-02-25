import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDatabase"
import { Authenticator} from "../services/Authenticator"


export const getRecipes = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string
    const id: string = req.params.id

    try {

        if (!token) {
            res.status(401).send(
                "Necessita de token para essa operação"
                )
        }

        const authenticator = new Authenticator()
        authenticator.getTokenData(token)

        const recipeDatabase = new RecipeDatabase()
        const recipe = await recipeDatabase.getRecipeById(id)

        // if(!recipe){
        //     res.status(402).send(
        //         "Receita inexistente!"
        //         )
        // }
        
        const result = {
            id: recipe.getId(), 
            title: recipe.getTitle(), 
            description: recipe.getDescription(),
            }

        res.status(200).send({ recipe: result })

    } catch (error) {
        res.status(400).send(error.message);
    }
}