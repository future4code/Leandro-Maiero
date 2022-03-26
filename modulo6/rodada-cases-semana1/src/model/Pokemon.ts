export class Pokemon {
  constructor(
    private name: string,
    private pokedexNumber: number,

    private generation: number,
    private type_1: string,
    private type_2: string,
    
    private attack: number,
    private defense: number,
    private stamina: number,
    private statusTotal: number,
  ) {}

  static toPokemonModel(data: any): Pokemon {
    return new Pokemon(
      data.name,
      data.pokedex_num,
      data.generation,
      data.type_1,
      data.type_2,      
      data.attack,
      data.defense,
      data.stamina,
      data.status_total,
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

  public getType1() {
    return this.type_1;
    
  }

  public getType2() {
    return this.type_2;
    
  }  

  public getAtk() {
    return this.attack;
  }

  public getDef() {
    return this.defense;
  }

  public getSta() {
    return this.stamina;
  }
  public getStatusTotal() {
    return this.statusTotal;
  }
}
