import { baseURL } from "./baseURL"
import axios from 'axios'


// Exercício 1 - 

//a) app.get

//b) Promise<any>

//c)

async function getAllSubscribers(): Promise<any[]>{
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data

}
getAllSubscribers()