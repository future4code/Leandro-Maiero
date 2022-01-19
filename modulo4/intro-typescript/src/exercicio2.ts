//Exercício 2 -
//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e 
//imprime no console um array que contenha essas três cores. Refatore a função para 
//o Typescript.


function imprimeTresCoresFavoritas() {
    const cor1:string = String(prompt("Insira sua primeira cor favorita"))
    const cor2:string = String(prompt("Insira sua segunda cor favorita"))
    const cor3:string = String(prompt("Insira sua terceira cor favorita"))
    console.log([cor1, cor2, cor3])
 }

 imprimeTresCoresFavoritas()