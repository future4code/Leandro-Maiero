import { app } from "./app";
import { getAllRecipes} from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
import {getUser} from "./endpoints/getUserByName"
import { getLimitedUsers} from "./endpoints/getLimitedUsers"



app.get("/recipes", getAllRecipes)

app.get("/users", getAllUsers)

app.get("/users/name", getUser)

app.get("/limited/users", getLimitedUsers)


