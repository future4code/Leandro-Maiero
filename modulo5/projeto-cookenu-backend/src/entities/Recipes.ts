export class Recipes {
    constructor(
        private id: string,
        private userId: string,
        private title: string,
        private description: string,
       
    ) { }

    public getId(): string {
        return this.id
    }
    public getUserId(): string {
        return this.userId
    }
    public getTitle(): string {
        return this.title
    }
    public getDescription(): string {
        return this.description
    }
  
    static toRecipeModel(data: any): Recipes {
        return new Recipes(data.id, data.userId, data.title, data.description)
    }

}