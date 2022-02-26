import connection from "../data/connection";




export const createUser = async (
   id: string, 
   email: string, 
   password: string) => {
    await connection
        .insert({ 
         id,
         email, 
         password, 
      })
   .into("User")

}

export default createUser