import axios from 'axios'
import { Address } from "../types/Address";

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (cep: string): Promise<Address | null> => {

    try {
        const response = await axios.get(`${baseUrl}/${cep}/json/`)
    
        const address: Address = {
            estado: response.data.uf,
            cidade: response.data.localidade,
            bairro: response.data.bairro,
            logradouro: response.data.logradouro
        }

        return address

    } catch (error:any) {
        console.log(error.message)
        return null
    }
}