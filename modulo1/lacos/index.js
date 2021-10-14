
//Exercicisos Laços


//Exercicios de interpretação de cóodigo


//1
//a) o cógigo reele a linha 3 e 2 até que seja execultado que é 10

//2
//a) 19
//   21
//   23
//   25
//   27
//   30

//b) sim, seria suficiente
     
//3
// o resultado encrementa a cada linha um * até chegar na linha 4 com  4*
//*
//**
//****
//****

//Exercicios de escretita de código


//1
//a) b) c)

let bichinhoUsuario = Number(prompt("Quantos bichinhos você tem?"))

if (bichinhoUsuario > 0) {
    for (let i = 0; i< bichinhoUsuario; i++) {
   const listaBichinhos = []
   let nomesDosBichinhos = prompt("Digite os nomes dos bichinho");
   listaBichinhos.push(nomesDosBichinhos)
   console.log(listaBichinhos);
    }
}else {
    console.log("Que pena! Você poderia adotar um Pet!")
}
     
//2

//a)

const numeosOriginais = [10 , 15 , 33 , 40 , 50]

let i = 0
while(i< 4){
    console.log(numeosOriginais[i])
    i++
}
 for (let num of numeosOriginais){
     console.log (num)
 }
 

//b

for(let numero of numeosOriginais){
    console.log(numero / 10)
}

// //c

const paresOriginal =[]
for (let numero of numeosOriginais){
    if(numero % 2 === 0){
        paresOriginal.push(numero)
    }
}
console.log (paresOriginal)

// //d)

for (let i = 0; i < numeosOriginais.length; i++) {

    paresOriginal.push( `o Elemento do indice ${i} é ${numeosOriginais[i]}`)

}
console.log (paresOriginal)









