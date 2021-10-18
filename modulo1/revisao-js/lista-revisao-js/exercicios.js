// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
     
    const tamanhoArray = ["Azul", "Amarelo", "Vermelho"]
  
    console.log(tamanhoArray)
     
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
      
    var array = [0,8,23,16,10,15,41,12,13];
array.reverse()

console.log(array)

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    var retornaOrdenado = [3, 2, 1, 4, 7 ];
    
    retornaOrdenado.sort() 
    
    console.log(retornaOrdenado)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    var numerosPares = [1, 2, 3, 4, 5, 6]
    function buscarPares(valor){
        if (valor %2 == 0)
        return valor
    }  
var paresNumeros = numerosPares.filter(buscarPares);
console.log(paresNumeros)

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
     
    var numerosElevadoDois = [1, 2, 3, 4, 5, 6]
    function elevarPares(valor){
        if (valor %2 == 0)
        return valor 
    }  
var elevadoDois = numerosElevadoDois.filter(elevarPares);
console.log(elevadoDois)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
    var maiorNumero = [1, 5, 3, 7, 5, 2, 2];
    var numeroMaior = maiorNumero.reduce(function(a, b) {
      return Math.max(a, b);
    });
 console.log (numeroMaior)


}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    return 'Equilátero'
}else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
    return 'Isósceles'
}else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
    return 'Escaleno'
}


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
    

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
const objeto = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
}

const chamadoFilme = objeto
console.log(`Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores}.`)

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
objeto = {
    nome:'Astrodev',
    idade: 25,
    email: 'astrodev@labenu.com.br',
    endereco: "Rua do Futuro, 4"
}

objeto2 = {
    ...objeto,
    nome: 'ANÔNIMO'
}

console.log(objeto2)
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
  const usuariosParque = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const pessoasParque1 = usuariosParque.map((permissao) =>{

           if (permissao.idade >= 14)
           if (permissao.altura >= 1.50 )
           if (permissao.idade <= 60)
           console.log (permissao)

    })
     


}

// EXERCÍCIO 13B

function retornaPessoasNaoAutorizadas(pessoas) {
  
    const usuariosParque = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

    const pessoasParque2 = usuariosParque.map((semPermissao) =>{

        if (semPermissao.idade <= 14);
        if (semPermissao.altura <= 1.50 );
        if (semPermissao.idade >= 60);
        console.log (semPermissao) 
    }) 


}



// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {


return contas.map((conta)=>{
    let soma = conta.compras.reduce((acc, cur)=> acc + cur, 0);
    let saldo = conta.saldoTotal
    return {...conta, saldoTotal: saldo - soma, compras:[]}
})

}
    


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
   
        


}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
    
}