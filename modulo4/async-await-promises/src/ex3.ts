import { baseURL } from "./baseURL"
import axios from 'axios'

// Exercício 3 -

type user = {
	id: string;
	name: string;
	email: string;
}


//a) Não 

//b) 

//c) 

const getAllSubscribers = async (): Promise<user[]> => {
    const result = await axios.get(`${baseURL}/subscribers`);
    return result.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      }
    })
}
getAllSubscribers().then(console.log)