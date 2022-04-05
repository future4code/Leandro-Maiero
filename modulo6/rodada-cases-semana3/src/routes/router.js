import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/homePage/index"
import GlobalStyle from '../globalStyle'



  
export const Router = () =>{
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
              <Route exact path={'/'}>
                    <HomePage />
              </Route>
            </Switch>
        </BrowserRouter>
    )
}