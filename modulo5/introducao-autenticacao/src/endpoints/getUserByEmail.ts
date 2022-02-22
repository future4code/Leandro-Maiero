import connection from '../data/connection'



export const getUserByEmail = async (email: string): Promise<any> => {
    const user = await connection('User').select().where({ email: email })
    return user[0]
}