import Router from "./router/Router"
import Menu from "./components/Menu/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants/urls";
import { BrowserRouter } from "react-router-dom";


const App = () => {

  const [loterias, setLorerias] = useState([])

  const getLoterias = () =>

  axios.get(`${BASE_URL}/loterias`)

        .then((res) => {
          setLorerias(res.data)
        })
        . catch((error) => {
          console.log(error)


        })

        useEffect(() =>{
          getLoterias()
        }, [])

  return (
    <BrowserRouter>

      <Menu data ={loterias}/>
       <Router/>
     
    </BrowserRouter>
  );
}

export default App;
