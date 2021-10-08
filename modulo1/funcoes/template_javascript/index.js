// Exercicios de interpretação

// 1-
// a)

// 10 / 50

// b)

// Não imprime o resultado da multiplicação no console

// 2-
// a)

// A função tem a utilidade de deixar os textos inseridos com 
// as letras minusculas e informar se o que o usuario digitou é true ou false 

// b) eu gosto de cenoura/true
//    cenoura é bom pra vista/true
//    cenouras crescem na terra/true


// Exercícios de escrita de código

1-
//a)

function minhasInfo() {
   console.log ("Eu sou Leandro, tenho 31 anos, moro em São Paulo e sou estudante")
   
}
 minhasInfo()

 b)

 function minhasInfo2(nome, idade, cidade, profissão){
    const fraseFinal = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`

    return fraseFinal
 }

 const fraseFinal2 = minhasInfo2("Leandro", 31, "Sâo Paulo", "Estudante")
console.log (fraseFinal2)
 
//_______________________________________________________________________

// 2
// a)

function soma(a, b) {
    console.log (a + b)
}

soma(7, 3)

// b)


// c)


// d)

function fraseMaiuscula(mensagem) {
    console.log ("Mensagem Nova",mensagem.length)
    console.log(mensagem.toUpperCase())
}

fraseMaiuscula ("Mensagem Nova!")

// //______________________________________________________________

// 3-

const numeroUm = Number(prompt("Me fale um numero:"))
const numeroDois = Number(prompt("Me fale outro numero:"))

console.log ("Os numeros inseridos foram:",numeroUm,"e",numeroDois,"!!!")

function soma(numeroUm, numeroDois) {
    const soma1 = numeroUm + numeroDois 
    return soma1
}

console.log("Somando:", soma(numeroUm, numeroDois))

function subtração(numeroUm, numeroDois) {
    const subtração1 = numeroUm - numeroDois 
    return subtração1
}

console.log("Subtraindo:", subtração(numeroUm, numeroDois))

function multiplicação(numeroUm, numeroDois) {
    const multiplicação1 = numeroUm * numeroDois 
    return multiplicação1
}

console.log("Multiplicando:", multiplicação(numeroUm, numeroDois))



function divisão(numeroUm, numeroDois) {
    const divisão1 = numeroUm / numeroDois 
    return divisão1
}

console.log("Dividindo:", divisão(numeroUm, numeroDois))

