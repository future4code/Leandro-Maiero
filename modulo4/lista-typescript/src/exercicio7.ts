//Execício 7 - 

type Produtos = {
    nome: string,
    quantidade: number,
    valorUnitario: string | number
}

const produtos:Produtos[] = 
[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (produtos:Produtos[]):Produtos[] => {

    return produtos.map((produto) => { 
    const valorAjustado: string = 
    Number(produto.valorUnitario).toFixed(2).replace('.', ',')
    
    return {
        nome: produto.nome,
        quantidade: produto.quantidade,
        valorUnitario: "R$" + valorAjustado
    }
    }).sort((a, b) => (a.quantidade < b.quantidade ? -1 : 1))
}
console.log(ajustaPreco(produtos))