//Exercício 2 -

// Crie uma aplicação Node que recebe uma string representando uma operação matemática 
// e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada 
// utilizando os 2 valores fornecidos.


const operacao = process.argv[2]

const number1 = Number(process.argv[3])

const number2 = Number(process.argv[4])




   switch(operacao){
	   case "soma":
		      console.log("Resposta:", number1 + number2)
		   break;
	   case "subtrair":
		      console.log("Resposta:", number1 - number2)
		   break;
      case "multiplicar":
            console.log("Resposta:", number1 * number2)
            break;
      case "dividir":
            console.log("Resposta:", number1 / number2)
            break;
                     
   }