import PostData from "../data/PostData";
import Post, {PostInputDTO} from "../model/Post"
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";



export default class PostBusiness {
    createPost(input: PostInputDTO) {
        throw new Error('Method not implemented.');
    }
    constructor(
        private postData: PostData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }

    newPost = async (input: PostInputDTO,token:string) => {
        const { photo, description, date,type } = input

        if (!photo || !description || !date || !type) {
            throw new Error("")
        }
        if (!token) {
            throw new Error("token não enviado")
        }

        const tokenData:any = await new Authenticator().getTokenData(token)

        if (!tokenData) {
            throw new Error("token invalido")
        }
        const user_id:string = tokenData.id
        const id = this.idGenerator.generateId()

        const post = new Post(
            id,
            user_id,
            photo,
            description,
            date,
            type
        )

        await this.postData.insert(post)

        return 
    }

}