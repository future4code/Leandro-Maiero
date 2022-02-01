//Exercício 5 -

//Considerando o array de usuários abaixo, crie uma função que receba este array 
//como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”. 

type SrtUsuarios = string

enum Role {
    ADMIN = "admin",
    USER = "user"
}

type Usuarios = {
    name: SrtUsuarios,
    email:SrtUsuarios,
    role: Role

}


const usuarios:Usuarios[] =   

[
	{name: "Rogério", email: "roger@email.com", role: Role.USER},
	{name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
	{name: "Aline", email: "aline@email.com", role: Role.USER},
	{name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
	{name: "Adilson", email: "adilson@email.com", role: Role.USER},  
	{name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
] 

const filtrarAdmins = (usuarios: {
    name: SrtUsuarios,
    email: SrtUsuarios,
    role: Role
}[]):string[] => {

return usuarios.filter((usuarios)=>{
    return usuarios.role === Role.ADMIN
}).map((usuarios) =>{
    return usuarios.email
})

}

console.log(filtrarAdmins(usuarios))
