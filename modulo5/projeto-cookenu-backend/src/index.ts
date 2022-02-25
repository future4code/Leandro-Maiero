import {app} from './app'
import { loginUser } from './endpoints/login';
import { signup } from './endpoints/signup';
import {getUserProfile} from './endpoints/getUserProfile'
import {getIdProfile} from './endpoints/getIdProfile'
import { createRecipe } from './endpoints/createRecipes';
import { getRecipes } from './endpoints/getRecipes';



app.post("/signup", signup); //signup
app.post("/user/login", loginUser); //login

app.get("/user/profile", getUserProfile) //Pegar próprio perfil
app.get("/user/:id", getIdProfile) //Pegar perfil de outro usuário


app.post("/recipe", createRecipe) //Criar receita
app.get("/recipe/:id", getRecipes) // Pegar receita



