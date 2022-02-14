import { baseURL } from "./baseURL"
import axios from 'axios'


// Exercício 6 -

//a) Promise.all agrupa todas as promises e retorana um resultado

//b) 

//c) 

type user = {
    id: string;
    name: string;
    email: string;
}


const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };