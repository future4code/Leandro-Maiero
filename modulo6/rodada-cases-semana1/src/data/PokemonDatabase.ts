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
      const pokemon = await BaseDatabase.connection("pokemonGo_")
        .select(
          "name",
          "pokedexNnumber" as "pokedexNumber",
          "generation",
          "type",
          "statTotal" as "statTotal",
          "ATK",
          "DEF",
          "STA"
        )
        .where("name", "LIKE", `%${name}%`)
        .where("type", "LIKE", `%${type}%`)
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

