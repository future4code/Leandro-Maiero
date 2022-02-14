import { baseURL } from "./baseURL"
import axios from 'axios'

// Exercício 5 -


type user = {

    id: string,
    name: string,
    
}
const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };