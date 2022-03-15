import Post from "../model/Post";
import BaseDatabase from "./BaseDatabase";


export default class PostData extends BaseDatabase{
    protected TABLE = "labook_posts"

    insert = async (post: Post) =>{
        try{
            await BaseDatabase
            .connection(this.TABLE)
            .insert(post)
        }catch(error){
            throw new Error("Erro ao criar postagem no banco de dados")
        }
    }


}