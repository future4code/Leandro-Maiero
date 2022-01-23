//Exercício 4 -

//a) -

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1, pokemon2, pokemon3)
//b) -

//usaria o comando tsc no terminal e assim compilando o arquivo para Js.

//c) - 
// Para transpilar o arquivo eu acrescentaria o caminho no package.json
// e ao rodar o npn run(nome do arquivo) ele se compilaria automaticamente
// para js.
