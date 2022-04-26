import {connection} from "./BaseDatabase"





connection.raw (`

    CREATE TABLE IF NOT EXISTS amaroProducts (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        tags VARCHAR (255)
      );
    `)




