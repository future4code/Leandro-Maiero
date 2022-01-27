//Exercício 1 -
//Crie um função que receba uma string com o nome e outra string com uma data 
//de nascimento (ex.: “24/04/1993”).



type Info = string

type Pessoa = {

    nome:Info,
    dia:Info,
    mes:Info,
    ano:Info
}

function minhasInfo (parametro:Pessoa) {
    
    console.log("Olá me chamo", parametro.nome, 
    "nasci no dia", parametro.dia, "do mês", parametro.mes, 
    "do ano de", parametro.ano)
    
}

minhasInfo({nome:"Leandro", dia:"10", mes:"02", ano:"1990"})

