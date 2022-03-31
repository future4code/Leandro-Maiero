import axios from 'axios'
import { BASE_URL } from '../constants/baseUrl'


export const getLotos = (set_data) => {
    const url = `${BASE_URL}/loterias`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}


export const getResults = (url_link, set_data) => {

    const url = `${BASE_URL}${url_link}`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}


export const getNumbers = (url_link, set_data, id) => {
    
    const url = `${BASE_URL}${url_link}${id}`

    axios.get(url)
        .then((resp) => {
            set_data(resp.data.numeros)
        })
        .catch((error) => {
            window.alert(error.message)
        })
}