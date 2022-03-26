import { Pokemon } from "../model/Pokemon";
import { BaseDatabase } from "./BaseDatabase";




export class PokemonDatabase extends BaseDatabase {
  public async getAllPokemons(
    name: any,
    type: any,
    sort: any,
    order: any,
    size: any,
    offset: any
  ): Promise<Pokemon[]> {
    try {
      const pokemon = await BaseDatabase.connection("pokemonGo")
        .select(
          "name",
          "pokedex_num",
          "generation",
          "type_1",
          "type_2",
          "statusTotal",
          "attack",
          "defense",
          "stamina"
        )
        .where("name", "LIKE", `%${name}%`)
        .where("type_1", "LIKE", `%${type}%`)
        .orWhere("type_2","LIKE", `%${type}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset);

      const result = pokemon.map((pokemon) => {
        return Pokemon.toPokemonModel(pokemon);
      });
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

