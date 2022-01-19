//Exercício 4 -
//A seguinte função recebe dois números como parâmetro e retorna a diferença entre o maior 
//número e o menor. Dessa forma, refatore a função para o Typescript.

function comparaDoisNumeros(num1:number, num2:number) {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
  }

console.log(comparaDoisNumeros(10, 20))