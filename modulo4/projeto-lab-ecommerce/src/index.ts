import { app } from "./app";
import { getUsers } from "./endpoints/getUser";
import { createUser } from "./endpoints/createUser";
import {getProducts} from "../src/endpoints/getProducts"
import { createProduct } from "./endpoints/createProduct";





 app.get("/users", getUsers)

 app.post("/users", createUser)

 app.get("/products", getProducts)

 app.post("/products/", createProduct)