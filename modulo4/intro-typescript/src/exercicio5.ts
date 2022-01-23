//Exercício 5

// A função abaixo pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, 
// e o ano em que sua carteira de identidade foi emitida (nessa ordem). 
// A função retorna  um booleano que indica se a carteira precisa ser renovada ou não. 
// A carteira precisa ser renovada segundo os seguintes critérios:

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser 
//   renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada 
//   de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos


function checaRenovacaoRG():boolean {
    const anoAtual:number = Number(prompt("Digite o ano atual"))
    const anoNascimento:number = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao:number = Number(prompt("Digite o ano de emissão do documento"))
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1 = idade <= 20 && tempoCarteira >= 5
    const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3 = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }

 console.log(checaRenovacaoRG())