import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/homePage/index"
import DetailsPage from '../pages/detailPage/index'
import GlobalStyle from '../globalStyle'



  
export const Router = () =>{
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Switch>
              <Route exact path={'/'}>
                    <HomePage />
              </Route>
              <Route exact path="/details/:id">
                    <DetailsPage />
               </Route>
              
            </Switch>
        </BrowserRouter>
    )
}