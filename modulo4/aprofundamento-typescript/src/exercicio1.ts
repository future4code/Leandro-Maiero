//Exercicio 1 -
//a) Crie uma variável minhaString do tipo string e atribua 
//   um valor a ela. 
//   Tente atribuir um número a esta variável. O que acontece?

const minhaString:string = ("Leandro")

console.log(minhaString)

//R. Ele não aceita numeros devido a atribuiçao restrita somente a strigs.
//________________________________________________________________________

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
//   Como fazer para que essa variável também aceite strings? 
//Ou seja, como criamos no typescript uma variável que aceite 
//mais de um tipo de valor?

type NumOrStr = number | string
type MeuNumOrStr ={
    id:NumOrStr,
    name:NumOrStr
}

const meuNumero: MeuNumOrStr = {

    id:1,
    name:"Leandro"
}

console.log(meuNumero)

//_______________________________________________________________________________

//c) Agora crie um novo objeto. Este objeto é uma pessoa, 
//e deve possuir três propriedades: nome, idade, corFavorita:

//d) Modifique a propriedade corFavorita para que apenas seja possível
//   escolher entre as cores do arco-íris. Utilize um enum para isso.




type MeuObjeto = number|string
enum Cores{

    CORESARCOIRES1 = "Violeta",
    CORESARCOIRES2 = "Anil",
    CORESARCOIRES3 = "Azul",
    CORESARCOIRES4 = "Verde",
    CORESARCOIRES5 = "Amarelo",
    CORESARCOIRES6 = "Laranja",
    CORESARCOIRES7 = "Vermelho"
}
type ObjetoMeu ={
    nome:MeuObjeto,
    idade:MeuObjeto,
    corFavorita:Cores,
}

const meuObjeto1: ObjetoMeu = {

    nome:"Leandro",
    idade:31,
    corFavorita:Cores.CORESARCOIRES3,
}

const meuObjeto2: ObjetoMeu = {

    nome:"Lais",
    idade:28,
    corFavorita:Cores.CORESARCOIRES1,
}

const meuObjeto3: ObjetoMeu = {

    nome:"Karine",
    idade:28,
    corFavorita:Cores.CORESARCOIRES4,
}


console.log(meuObjeto1, meuObjeto2, meuObjeto1)








