
// // // COMPARADORES
// // // Exercício 1------------------------------------------------------------------------------------

// // // a-)Comparador de desigualdade a!==b 
// // // Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 2));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
    
//     return `No comparador de igualdade ${a}===${b} é ${a === b}`
    
// }

// console.log (checarIgualdade(1, 2))



// // // c-)Faça uma função chamada "verificaSeEMaior"


 function verificaSeEMaior(a, b) {

     return `No comparador de maior ${a}===${b} é ${a > b}`
    
     }

     console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= false
// // b-) 1=='1'= false
// // c-) 'a'==='b'= true
// // d-) 'b'>'a'= true
// // e-) 0!==null= true


// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

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
            



cadastro()


// // Exercício 4-----------------------------------------------------------------------------------------------


const login =() => {

    const senhaUsuario = prompt("Digite sua senha").toLowerCase()

    if (senhaUsuario === "labenu"){
        console.log("Usuario logado")
    }else{
        console.log("Senha invalida")
    }

}
 login()

// // // // Exercício 5----------------------------------------------------------------------------------------------------




const primeiraDose = () => {


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

        const milissegundosDia = 86400000
        const hoje = data.getTime()
        const dataAtualizada = new Date(hoje + (tempo * milissegundosDia))
        const dataFormatada = dataAtualizada.toLocaleDateString("pt-BR")

        return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${dataFormatada}.`
    

    }

 console.log(primeiraDose())



// // // LOOP+CONDICIONAL

// // // Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
            
            const pessoaVacina = usuarios.filter((pessoa)=>{ 
                if(pessoa.nome === nomeDoUsuario){
                    pessoa.imunizacao = "completa"
                }
                return pessoa
            })
            
            

            console.log(pessoaVacina)



}
const nomePessoa = "Barbara"
segundaDose(nomePessoa)

// // // Exercício 7 --------------------------------------------------------------------------------------



const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta"}
    ]


        const avisoUsuario = usuarios.filter((pessoa) =>{
            if(pessoa.imunizacao === "incompleta") {
                return true
            }

        })

        avisoUsuario.map((pessoa)=>{
            console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
        })

 } 

avisoAosAtrasados();






// // DESAFIO------------------------------------------------------------------------------------------


const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasil",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasil",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasil",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {

const nomePessoa = prompt("Digite seu nome:").toLowerCase();
    const anoPessoa = Number(prompt("Em qual ano você nasceu?"))
    const nacionalidadePessoa = prompt("Qual o seu pais de origem?").toLowerCase()
    const senhaPessoa = prompt("Digite uma senha de no minimo 6 caracteres")
    const vacinaPessoa = prompt("Qual vacina você tomou?").toLowerCase()
    const imunizacaoPessoa = prompt("A sua vacinação esta completa ou incompleta").toLowerCase()

    const novaPessoa = {
        nome: nomePessoa,
        ano: anoPessoa,
        nacionalidade: nacionalidadePessoa,
        senha: senhaPessoa,
        vacina: vacinaPessoa,
        imunizacao: imunizacaoPessoa
    }

    if ( novaPessoa.ano <=2013) {
    }else {
        console.log("Infelizmente não podera se cadastrar")
    }if (novaPessoa.senha.length >= 6) {
    } else {
        console.log("A senha precisa ter pelo menos 6 caracteres")
    } if (novaPessoa.nacionalidade === "brasil") {
                usuarios.push(novaPessoa)
        } else {
         console.log("Infelizmente não podera se cadastrar")
         }
          
    console.log(usuarios)
}

cadastroDesafio();

//________________________________________________________________________________





const loginDesafio = () => {
  


    const senhaUsuario = prompt("Qual é a sua senha?")

    if (senhaUsuario === usuarios[0].senha || senhaUsuario === usuarios[1].senha  || senhaUsuario === usuarios[2].senha){
        console.log("Usuario logado")
        
    }else{
        console.log("Senha invalida")
    }
}

 loginDesafio()




//___________________________________________________________________________________

// const primeiraDoseDesafio = () => {

    
//}


//console.log(primeiraDoseDesafio())





//____________________________________________________________________________________





const segundaDoseDesafio = (nomeDoUsuario) => {
    
           
    const pessoaVacina = usuarios.filter((pessoa)=>{ 
        if(pessoa.nome === nomeDoUsuario){
            pessoa.imunizacao = "completa"
        }
        return pessoa
    })
    
        console.log(pessoaVacina)



}


console.log(segundaDoseDesafio("Artur"))






//________________________________________________________________________________







const avisoAosAtrasadosDesafio = () => {
  


    const avisoUsuario = usuarios.filter((pessoa) =>{
          if(pessoa.imunizacao === "incompleta") {
            return true
                    }
        
             })
        
      avisoUsuario.map((pessoa)=>{
      console.log(`Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
                })
        
         } 
        
         
        
    avisoAosAtrasadosDesafio()
    
