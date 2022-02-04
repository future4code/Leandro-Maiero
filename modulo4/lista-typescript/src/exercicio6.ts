//Exercício 6 -

type Clientes ={
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const clientesContas = 

[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const clientesNegativo = (clientesContas:Clientes[]) => {
    const contaNegativa = clientesContas.map((clientes) => {
        const negativados = clientes.debitos.reduce((saldoTotal, contaCliente) => {
            return saldoTotal + contaCliente
        }, 0)
        if (clientes.saldoTotal - negativados < 0) {
            return {
                cliente: clientes.cliente,
                saldoTotal: clientes.saldoTotal - negativados,
                debitos: []
            }
        }
    }).filter((cliente) => {
        return cliente
    })

    return contaNegativa
}
console.log(clientesNegativo(clientesContas))