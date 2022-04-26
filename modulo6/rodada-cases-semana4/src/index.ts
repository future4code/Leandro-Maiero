import getProducts from "./Controller/getProducts"
import createProducts from "./Controller/createProducts"
import app from "./Data/app"


app.get('/products', getProducts)

app.post('/products', createProducts)

