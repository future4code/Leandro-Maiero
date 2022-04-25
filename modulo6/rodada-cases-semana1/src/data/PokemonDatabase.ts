import { Pokemon } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";






export class PokemonDatabase extends BaseDatabase {

  protected TABLE_NAME = 'PokemonGo'

  getAllPokemons = async ( 
     Name: any,
     type: any,
     sort: any,
     order: any,
     size: any,
     offset: any) => {
      try {
          const result: Pokemon [] = await BaseDatabase.connection(this.TABLE_NAME)
              .select(  
                        "Name",
                        "pokedex_num",
                        "generation",
                        "type_1",
                        "type_2",
                        "statusTotal",
                        "attack",
                        "defense",
                        "stamina")
              .where("Name", "LIKE", `%${Name}%`)
              .orWhere("type_1", "LIKE", `%${type}%`)
              .orWhere("type_2","LIKE", `%${type}%`)
              .limit(size)
              .offset(offset)
              .orderBy(sort, order)
          return result
      } catch (error) {
        throw new Error(error.sqlMessage || error.message);
      }
  }


    
  
  

    
  
}

// export class PokemonDatabase extends BaseDatabase {
//   public async getAllPokemons(
//     Name: any,
//     type: any,
//     sort: any,
//     order: any,
//     size: any,
//     offset: any
//   ): Promise<Pokemon[]> {
//     try {
//       const pokemon = await BaseDatabase.connection("PokemonGo")
//         .select(
//           "Name",
//           "pokedex_num",
//           "generation",
//           "type_1",
//           "type_2",
//           "statusTotal",
//           "attack",
//           "defense",
//           "stamina"
//         )
//         .where("Name", "LIKE", `%${name}%`)
//         // .orWhere("type_1", "LIKE", `%${type}%`)
//         // .orWhere("type_2","LIKE", `%${type}%`)
//         .orderBy(sort, order)
//         .limit(size)
//         .offset(offset);

//       const result = pokemon.map((pokemon) => {
//         return Pokemon.toPokemonModel(pokemon);
//       });
//       return result;
//     } catch (error) {
//       throw new Error(error.sqlMessage || error.message);
//     }
//   }
// 

