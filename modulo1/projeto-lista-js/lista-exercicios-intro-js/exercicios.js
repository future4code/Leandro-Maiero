// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   // implemente sua lógica aqui
//   return num1 + num2
// }

// EXERCÍCIO 0B
// function imprimeMensagem() {
//   // implemente sua lógica aqui
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
//function calculaAreaRetangulo() {


  const num1 = Number(prompt("Informe um numero para calcular um retangulo"))
  const num2 = Number(prompt("Informe outro numero"))
function calcularAreaRetangulo1 (num1, num2) {
  const area = num1 * num2
  return area
}

// console.log ("A area do seu retangulo é:", calcularAreaRetangulo1 (num1, num2))

//} 


// // // EXERCÍCIO 02
//  function imprimeIdade() {
// //   // implemente sua lógica aqui

const ano1 = Number(prompt("Em que ano estamos?:"))
const ano2 = Number(prompt("Em que ano você nasceu?:"))

function idade (ano1, ano2) {
  const anos = ano1 - ano2
  return anos
// } 

// console.log ("Voce tem:",idade(ano1, ano2) , "anos!!")

// }

// // EXERCÍCIO 03
// function calculaIMC(peso, altura) {
//   // implemente sua lógica aqui

const peso = Number(prompt("Qual o seu peso atual?:"))
const altura = Number(prompt("Qual a sua altura?:"))

function calculoIMC (peso, altura) {

  const imc = peso / (altura * altura)
  return imc 
// }

// console.log ("O sei indice de Massa Corporal é:", calculoIMC(peso, altura))


// // }

// // EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
//   // implemente sua lógica aqui
//   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."


const nome = (prompt("Qual o seu nome?:"))
const idade = (prompt("Qual a sua idade?:"))
const email = (prompt("Qual o seu E-mail?:"))

console.log (`Meu nome é, ${nome}, tenho, ${idade} anos, e o meu email é, ${email}.`)

// }

// // EXERCÍCIO 05
// function imprimeTresCoresFavoritas() {
//   // implemente sua lógica aqui

const cor1 = (prompt("qual sua cor favoria?:"))
const cor2 = (prompt("digue outra cor:"))
const cor3 = (prompt("mais uma cor:"))

console.log (cor1, cor2, cor3)

  

// }

// // EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
//   // implemente sua lógica aqui


const frase = prompt("Diga uma frase:")
const fraseMaiuscula = frase.toUpperCase()

console.log(fraseMaiuscula)


// }

// // EXERCÍCIO 07
// function calculaIngressosEspetaculo(custo, valorIngresso) {
//   // implemente sua lógica aqui





// }

// // EXERCÍCIO 08
// function checaStringsMesmoTamanho(string1, string2) {
//   // implemente sua lógica aqui

// const string1 = (prompt("Diga uma palavra"))
// const string2 = (prompt("Diga outra palavra"))

// function conferairTamanhoString(string1, string2){
// const tamanhoString = (string1.lenght === string2.lenght)
// console.log (tamanhoString)
// }






// }

// // EXERCÍCIO 09
//  function retornaPrimeiroElemento(array) {

// const retornaFrutas = ["laranja" , "banana" , "maça"]
// const frutas=retornaFrutas[0]
// console.log (frutas)


//  }
//  console.log(frutas)

// // EXERCÍCIO 10
// function retornaUltimoElemento(array) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 12
// function checaIgualdadeDesconsiderandoCase(string1, string2) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 13
// function checaRenovacaoRG() {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
// function checaValidadeInscricaoLabenu() {
//   // implemente sua lógica aqui

// }