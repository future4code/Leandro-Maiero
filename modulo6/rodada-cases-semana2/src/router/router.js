import { BrowserRouter, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { Switch } from "react"




export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
               
            </Switch>
        </BrowserRouter>
    )
}

