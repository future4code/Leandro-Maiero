import { JwtPayload, sign, verify } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const expiresIn = "1min";
export class jsonWebToken {
    tokenGenerate(
        id: string, 
        role: string): string {
        
            const token = sign(
            {
                id: id,
                role: role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: expiresIn
            }
        )
        return token
    }
    getData(token: string) {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string
            ) as JwtPayload
            return {
                id: tokenData.id,
                role: tokenData.role
            }            
        } catch (error) {
            console.log(error)
            return null
        }
    }
}