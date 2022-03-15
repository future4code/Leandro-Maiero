export default class Post{
    constructor(
        private id: string,
        private user_id: string,
        private photo_url: string,
        private description: string,
        private date_creat: string,
        private type: string
    ){}
}

export type PostInputDTO = {
    photo: string
    description: string
    date: string
    type:string
}

