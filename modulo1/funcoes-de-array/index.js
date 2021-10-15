//Exercícios de interpretação de código


//1
//a)
// Será impresso o nome de cada pessoa em seguida seus apelidos cada um em cada linha, item por item


//2
//a)
// Será impresso no console somente uma linha com os nomes e em detalhe abaixo

//3
//a)
// Será impresso somente o nome e apedido de Amanda e Laís

//_______________________________________________

//Exercícios de escrita de código

//1 -
//a)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const pegarNomesDosPets = (pet) => {
        return pet.nome 
 }

 const nomeDosPets =  pets.map(pegarNomesDosPets)
  console.log(pets)
  console.log(nomeDosPets)

  //b)
  
  const pegarPetsSalsicha = (pet) => {
         if(pet.raca=== "Salsicha") {
             return true
            }else {
              return false
         }
        }       
     const petSalsicha = pets.filter(pegarPetsSalsicha)
     
     console.log(petSalsicha)  
    

   //c)

   const pegarPoodles = (nome) => {
    if(nome.raca === "Poodle") {
        return true
         }else {
         return false
    
    }
   }       
 const petPoodle = pets.filter((item) =>{
  if (item.raca === "Poodle")
  console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
 })
 
 console.log(petPoodle) 


//2 -

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 //a)

const nomesProdutos = produtos.map((item) => {
    return item.nome
    })
console.log(nomesProdutos)

//b)

const precosProdutos = produtos.map((item) => {
    return item.nome + " | " + item.preco*0.95
    })
console.log(precosProdutos)


//c)

const bebidas = produtos.filter((item) =>{
       if (item.categoria === "Bebidas")
      console.log (item)

})


//d)

const produtoYpe = produtos.filter((item) =>{
    return item.nome.includes("Ypê")
   
})
console.log (produtoYpe)

//e)

const compreYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})


const ypeFrase = (item) => {
    return `Compre ${item.nome} por ${item.preco} `

}
const novaArr =  compreYpe.map(ypeFrase)
console.log(novaArr)
     

//DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 






