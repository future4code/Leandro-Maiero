import { v4 } from "uuid"

export class generatorId {
    generateId(){
        return v4()
    }
}