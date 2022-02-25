import {app} from './app'
import { loginUser } from './endpoints/login';
import { signup } from './endpoints/signup';
import {getUserProfile} from './endpoints/getUserProfile'




app.get("/user/", getUserProfile)


app.post("/user", signup);
app.post("/user/login", loginUser);
