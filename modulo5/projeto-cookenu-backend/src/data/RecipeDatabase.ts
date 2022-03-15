import { Recipes } from "../entities/Recipes"
import { BaseDatabase } from './BaseDatabase'

export class RecipeDatabase extends BaseDatabase {

    public registerRecipe = async (recipe: Recipes): Promise<void> => {
        try {
            await BaseDatabase.connection('RecipesCookenu').insert({
                id: recipe.getId(),
                userId: recipe.getUserId(),
                title: recipe.getTitle(),
                description: recipe.getDescription(),
                
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getRecipeById = async (id: string): Promise<Recipes> => {
        try {
            const [recipes] = await BaseDatabase.connection('RecipesCookenu')
                .select('*')
                .where({id:id})

            const newRecipe = recipes && Recipes.toRecipeModel(recipes)
            return newRecipe

        } catch(error){
            throw new Error(error.sqlMessage || error.message);
        }
    }
}