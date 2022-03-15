import UserData from "../data/UserData2";
import User, {SignupInputDTO, LoginInputDTO  } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";



export default class UserBusiness{
    constructor(
        private userData: UserData,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }


    signup = async (input: SignupInputDTO) =>{
        
        const {name, email, password} = input
        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        
        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error ("Email já cadastrado")
        }

       
        const id = this.idGenerator.generateId()
        
        const hashedPassword = await this.hashManager.hash(password)
     
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        console.log(user)
        await this.userData.insert(user)
        
        const token = this.authenticator.generateToken({id})
        return token
    }

    login = async (input: LoginInputDTO) => {
        const { email, password } = input
        if (!email || !password) {
            throw new Error("E-mail ou senha incorretos")
        }

        const userDatabase = new UserData()

        const user = await userDatabase.findByEmail(email)

        if (!user) {
            throw new Error('E-mail não cadastrado!')
        }

        
        const passwordIsCorrect = await this.hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error("Senha incorreta")
        }

        const id = this.idGenerator.generateId()
        const token = this.authenticator.generateToken({ id })
        return token
    }

}


