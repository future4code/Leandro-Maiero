import { app } from './app'
import UserBusiness from './business/UserBusiness'
import UserController from './controller/UserController'
import UserData from './data/UserData2'
import { Authenticator } from './services/Authenticator'
import { HashManager } from './services/HashManager'
import { IdGenerator } from './services/IdGenerator'

const userController = new UserController()

app.post("/user/signup", userController.signup)