import { baseURL } from "./baseURL"
import axios from 'axios'

// Exercício 4 -

// a) void

// b)

const news = {
    title: "Notícia nova",
    content: "Conteúdo novo",
    date: Date.now()
}

const createNews = (news: any):Promise<void> => {
    return axios.put(`${baseURL}/news`, news)
}
createNews(news).then(console.log)