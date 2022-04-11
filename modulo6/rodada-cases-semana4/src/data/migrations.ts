import { BaseDatabase } from "./BaseDatabase";

class CreateTable extends BaseDatabase {

    create = async () => {
        await BaseDatabase.connection.raw(`
          (
     
        `)
    }
}

const createTable = new CreateTable()
createTable.create()
