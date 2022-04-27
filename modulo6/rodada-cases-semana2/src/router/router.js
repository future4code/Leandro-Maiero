import {Switch, Route} from "react-router-dom"
import Megasena from "../pages/Megasena/index"
import DiaDeSorte from "../pages/DiaDeSorte/index"
import Lotofacil from "../pages/Lotofacil/index"
import Lotomania from "../pages/Lotomania/index"
import Quina from "../pages/Quina/index"
import Timemania from "../pages/Timemania/index"




const Router = () =>{

    return (
        
          
        <Switch>

               
        <Route exact path="/">
        <Megasena />
        

      </Route>

      <Route exact path="/diadesorte">
        <DiaDeSorte />
      </Route>

      <Route exact path="/lotofacil">
        <Lotofacil />
      </Route>

      <Route exact path="/lotomania">
        <Lotomania />
      </Route>

      <Route exact path="/quina">
        <Quina />
      </Route>

      <Route exact path="/timemania">
        <Timemania />
      </Route>

      
        </Switch>
          

    )




}

export default Router