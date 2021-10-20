//exercicio de interpretação de código

//1 - a)

// elenco: Matheus Nachtergaele
// elenco: Length 19
// será tranmitido na Globo as 14h

//2-a)

// nome do cachorro passara a se chamar "Juba"
// //"Jubo"

//b) a sintaxe dos tres ponto serve para o espalhamento/spread 
//   ou seja realiza uma cópia de um objeto. 

//3-a)

// será impresso "backernder" e  undefined

// b) foi impresso "backernder" porque foi alterado o nome 

_______________________________________________________________

//Exercicios de escrita de código!

// 1 - b)

const pessoa = {

    nome: "Leandro",
    apelidos: ["Leco" , "Lele" , "Leandrinho"]
}
 
const pessoaFrase = (`Eu sou, ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos [0]} ou ${pessoa.apelidos [1]} ou ${pessoa.apelidos [2]}`)
console.log (pessoaFrase) 

// // b) 

const nomePessoa = {...pessoa, apelidos: ["Lecoleco", "Lecão" , "Leandrão"]}

console.log (pessoa) 
console.log (nomePessoa)

//2 - a)/ b)

const dadosPessoa1 = {
    nome: "Leandro",
    idade: 31,
    profissao: "Estudante"
    
      }

      const dadosPessoa2 = {
          nome: "Lais",
          idade: 27,
          profissao: "Engenheira de Produção"
      }

console.log (dadosPessoa1)
console.log (dadosPessoa2)







//3 - a)


let carrinho = []

const  compraDeFrutas1 = {
        nome: "Banana",
    disponibilidade: true
};

    const compraDeFrutas2 = {
    ...compraDeFrutas1,
    nome: "Maça"
};

const compraDeFrutas3 = {
    ...compraDeFrutas1,
    nome: "Maça"
};


function carrinhoDeCompra (fruta) {
    carrinho.push(fruta)
    
    
}

carrinhoDeCompra(compraDeFrutas1)
carrinhoDeCompra(compraDeFrutas2)
carrinhoDeCompra(compraDeFrutas3)



console.log(carrinho)



 
























