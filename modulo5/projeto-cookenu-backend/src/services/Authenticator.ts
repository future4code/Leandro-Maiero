import * as jwt from "jsonwebtoken"



export interface AuthenticatorData {
    id: string,    
}




export class Authenticator{
    public generate(input: AuthenticatorData):string {
        const token = jwt.sign(input, process.env.JWT_KEY, {
          expiresIn: process.env.TOKEN_EXPIRES_IN,    
    });

    return token;
   }
   
   public getTokenData(token: string): AuthenticatorData {
       const data = jwt.verify(token, process.env.JWT_KEY)
       return data as AuthenticatorData

   }
}