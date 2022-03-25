import { BaseDatabase } from "./BaseDatabase";

class CreateTable extends BaseDatabase {

    create = async () => {
        await BaseDatabase.connection.raw(`
         CREATE TABLE IF NOT EXISTS PokemonGo (
           Row TEXT,
           name TEXT,
           pokedex_num TEXT, 
           generation TEXT, 
           stage_evolution TEXT, 
           family TEXT,
           type_1 TEXT, 
           type_2 TEXT,
           weather_1 TEXT, 
           weather_2 TEXT, 
           status_total TEXT, 
           attack TEXT,
           defense TEXT,
           stamina TEXT,
           legendary TEXT,
           shiny TEXT, 
         );
        `)
    }
}

const createTable = new CreateTable()
createTable.create()
