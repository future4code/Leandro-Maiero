import { baseURL } from "./baseURL"
import axios from 'axios'

// Exercício 2 - 

//a) A diferença é que excluímos o"function", e colocamos o async antes do ()=>.

//b)

const getAllSubscribers = async ():Promise<any[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data
}

getAllSubscribers().then(console.log)