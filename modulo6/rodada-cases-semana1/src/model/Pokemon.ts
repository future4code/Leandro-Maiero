export class Pokemon {
  constructor(
    private name: string,
    private pokedexNumber: number,
    private generation: number,
    private type: string,
    private statTotal: number,
    private atk: number,
    private def: number,
    private sta: number
  ) {}

  static toPokemonModel(data: any): Pokemon {
    return new Pokemon(
      data.name,
      data.pokedex_num,
      data.generation,
      data.type,
      data.stat_total,
      data.atk,
      data.def,
      data.sta
    );
  }

  public getName() {
    return this.name;
  }

  public getPokedexNumber() {
    return this.pokedexNumber;
  }

  public getGeneration() {
    return this.generation;
  }

  public getType() {
    return this.type;
    
  }

  public getStatTotal() {
    return this.statTotal;
  }

  public getAtk() {
    return this.atk;
  }

  public getDef() {
    return this.def;
  }

  public getSta() {
    return this.sta;
  }
}
