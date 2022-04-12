import { BaseDatabase } from "./BaseDatabase";

class CreateTable extends BaseDatabase {

    create = async () => {
        await BaseDatabase.connection.raw(`
          (
            CREATE TABLE IF NOT EXISTS amaroProducts (
              id VARCHAR(255) PRIMARY KEY,
              name VARCHAR (255) NOT NULL
              );

              CREATE TABLE IF NOT EXISTS amaroTags (
                productId VARCHAR(255),
                FOREIGN KEY (productId) references amaroProducts(id),
                name VARCHAR (255) NOT NULL 
                );
            
     
        `)
    }
}

const createTable = new CreateTable()
createTable.create()
