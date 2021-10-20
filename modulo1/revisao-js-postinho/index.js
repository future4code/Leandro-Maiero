
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    
    return `No comparador de igualdade ${a}===${b} é ${a === b}`
    
}

console.log (checarIgualdade(1, 2))



// c-)Faça uma função chamada "verificaSeEMaior"


function verificaSeEMaior(a, b) {

    return (a > b)
    
    }

    console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'= true
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
     const usuario = []
    
         let nomeDoUsuario = prompt("Digite o seu nome")   
    console.log(nomeDoUsuario)
   
     let anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
    if (anoDeNascimento<=2003){
        console.log(anoDeNascimento)
     }else {
         alert("Infelizmente não podera se cadastrar")
              }
     let senhaUsuario = prompt("Digite uma senha de no minimo 6 caracteres")
    if (senhaUsuario.length>5){
        console.log(senhaUsuario)
     }else {
         alert("A senha precisa ter pelo menos 6 caracteres")
     }
     let nacionalidade = prompt("Qual a seu Pais de origem?").toLowerCase()
     if (nacionalidade === "brasil"){
         console.log(nacionalidade)
      }else {
        alert("Infelizmente não podera se cadastrar")
              }

    usuario.push({nomeDoUsuario , anoDeNascimento, senhaUsuario, nacionalidade})
     console.log(usuario)
        
        
            }
            



console.log(cadastro())


// Exercício 4-----------------------------------------------------------------------------------------------


    const login = "labenu"


const login =() => {

    const senhaUsuario = prompt("Digite sua senha").toLowerCase()

    if (senhaUsuario === "labenu"){
        console.log("Usuario logado")
    }else{
        console.log("Senha invalida")
    }

}
 console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

 const primeiraDose = () => {

//     //  Sua lógica aqui

const nome = prompt("Digite seu nome").toLowerCase()
const vacina = prompt("Qual o nome da vacina tomada?").toLowerCase()

let tempo, data = new Date;   


            if(vacina === "coronavac"){
            tempo = 28
        } else if (vacina === "astrazenica"){
            tempo = 90
        } else if (vacina === "pfizer"){
            tempo = 90   
        }

        const milissegundos1dia = 86400000

        const hoje = data.getTime()

        const dataAtualizada = new Date(hoje + (tempo * milissegundos1dia))

        const dataFormatada = dataAtualizada.toLocaleDateString("pt-BR")

        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`
    

    }

 console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui







// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastro = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastro());

// const login = () => {
//     //  Sua lógica aqui
// }
// console.log(login());

// const primeiraDose = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDose())
// const segundaDose = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDose("ALGUM NOME AQUI"));

// const avisoAosAtrasados = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasados());