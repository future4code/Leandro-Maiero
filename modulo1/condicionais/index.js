//Lista de exercicios condicionais

//Exercicios de interpretação de código

//1-

//a) Ele pede que o usuario insira um numero e nisso ele irar analisar o numero inserido

//b) Numeros pares

//c) Numeros impares

//2- 

//a) O codigo analisa a fruta desejada e informa o valor da mesma

//b) O preço da fruta Maçã é R$ 2,25.

//c) O preço da fruta Pêra é R$ 5.

//3- 

//a) A primeira linha pede ao usuario digitar um numero

//b) Daria erro em abas tentativas

//c) Deu erro porque não chamou a função

//________________________________________________________________________________

//Exercicios de escrita de código

//1 -

//a)

const idadeUsuario = prompt("Qual a sua idade?")
//b
const permissaoParaDirigir = Number(idadeUsuario)
//c
if (permissaoParaDirigir >= 18)   {
console.log("Você pode dirigir");

} else{
   console.log("Você não pode dirigir")
   }

// 2 -

const periodoAluno = prompt("Qual periodo voce estuda? M (Matutino) , V (Vespertino), e N (Noturno)").toLowerCase()


if (periodoAluno === 'm') {
console.log('Bom Dia!')
}
else if (periodoAluno === 'v') {
    console.log('Boa tarde!')
}
else if (periodoAluno === 'n') {
console.log("Boa Noite!")
} 
else {
    console.log("Periodo não encontrado")
}
   
//3 - 

// const periodoAluno = prompt("Qual periodo voce estuda? M (Matutino) , V (Vespertino), e N (Noturno)").toLowerCase()


switch (periodoAluno ) {
    case 'm':
console.log('Bom Dia!')
    break
    case 'v':
console.log('Boa tarde!')
    break
    case 'n':
console.log('Boa Noite!')
    break
    default:
    console.log("Periodo não encontrado")
    break
}

//4-

const generoFilme = prompt("Qual gereno de filme vamos assistir??").toLowerCase()
const valorFilme = Number(prompt("Até que valor podemos pagar no ingresso"))


switch (generoFilme) {
    case 'fantasia':
console.log('Bom Filme')
    break
    default:
console.log('Escolha outro filme :(')
}
if (valorFilme <= 15) {
    console.log('Bom filme')
         
}
else {
    console.log ('Escolha outro filme :(')
}

//__________________________________________________________

// Desafio

//1

const generoFilme = prompt("Qual gereno de filme vamos assistir??").toLowerCase()
const valorFilme = Number(prompt("Até que valor podemos pagar no ingresso"))


switch (generoFilme) {
    case 'fantasia':
console.log('Bom Filme')
    break
    default:
console.log('Escolha outro filme :(')
}
if (valorFilme <= 15) {
    console.log('Bom filme')
         
}
else {
    console.log ('Escolha outro filme :(')
}

const lanchinho = prompt('Qual lanchinho vai comprar? pipoca, chocolate ou doces,').toLowerCase()

switch (lanchinho){
    case 'pipoca':
        console.log ('Aproveite sua pipoca!')  
    break
    case 'chocolate':
        console.log ('Aproveite o seu chocolate')
    break
    case 'doces':
        console.log ('Aproveite seus doces')
    break
    default:
    console.log ('Bom filme')   
}

//2

console.log ('--- Dados da compra---')
const nomeTorcedor = prompt('Digite seu nome completo?').toLowerCase()
console.log (`Nome do cliente: ${nomeTorcedor}`)
const tipoJogo = prompt('Qual tipo de Jogo? IN ou DO').toLowerCase()

const etapaJogo = prompt('Qual etapa do jogo? SF, DT ou FI').toLowerCase()

const categoriaJogo = Number(prompt('Qual categoria? 1, 2, 3 ou 4'))

//const quantidadeIngresso = Number(prompt('Qual a categoria do jogo? 1, 2, 3 ou 4'))

switch (tipoJogo){
    case 'do': 
    console.log ('Tipo de Jogo: Nacional')
    break
    case 'in':
    console.log ('Tipo de Jogo: Internacional')
    break
    default:
        console.log('digite a opção correta')
}

switch (etapaJogo){
    case 'sf':
    console.log('Etapa do jogo: Semifinal')
    break 
    case ' dt':
    console.log('Etapa do jogo: Decisão do 3 lugar')
    break
    case 'fi'
    console.log('Etapa do jogo: Final')
    default:
        console.log('digite a opção correta')
}

switch (categoriaJogo) {
    case 1:













