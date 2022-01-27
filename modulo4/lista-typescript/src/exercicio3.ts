//Exercício 4 - 
//Você foi contratado por um serviço de streaming para organizar o sistema de 
//catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome do 
//filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma 
//se limitam aqueles encontrados no seguinte ENUM de gêneros: 


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filmesGeneros (nome:string, anoLancamento:number, 
                         genero:string, pontuacao?:number) {
   return `nome:${nome}, ano de lançaçamento:${anoLancamento}, 
          genero:${genero}, pontuação:${pontuacao}`                      
           }

console.log(filmesGeneros("Duna", 2021, GENERO.ACAO, 74))
console.log(filmesGeneros("Bad Boys - for lyfe", 2020, GENERO.COMEDIA, 83))