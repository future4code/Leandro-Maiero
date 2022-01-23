//Execício 3 - 

//Crie uma aplicação Node que receba uma string representando uma tarefa. 
// O programa deve adicionar a nova tarefa em uma variável que represente uma
// lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. 
// Após adicionar o item à lista, exiba a lista atualizada.



const tarefas = process.argv[2]

const listaDeTarefas = [

    "Lavar a louça",
	"Comprar Leite",
    "Estudar mais"

]

listaDeTarefas.push(tarefas)

console.log("Tarefa inserida com sucesso!","Tarefas:",listaDeTarefas,)
