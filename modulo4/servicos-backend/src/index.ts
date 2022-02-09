import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createUser } from './endpoints/createUser'
import {AddressInfo} from 'net'

dotenv.config()

export const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
        if (server) {
            const address = server.address() as AddressInfo;
            console.log(`Server is running in http://localhost:${address.port}`);
        } else {
            console.log(`Failure upon starting server.`)
        }

})



app.post("/users", createUser)