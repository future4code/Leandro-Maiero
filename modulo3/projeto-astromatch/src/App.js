import axios from "axios";
import { useEffect, useState } from "react";
import TelaMatch from "./Components/TelaMatch";


function App(){
  const [perfil, setPerfil] = useState({})
  const [proximo, setProximo] = useState(0)
  const [telaPerfis, setTelaPerfis] = useState(true)

  const receberPerfil = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-maiero/person")
       .then((resp)=>{
         const novoPerfil = resp.data.profile
         setPerfil(novoPerfil)
       })
        .catch((err)=>{
          console.log(err.response)
        })
  }

useEffect(()=>{
  receberPerfil()
}, [proximo])

const novoPerfil = () => {
  setProximo(proximo + 1)
}

const mudaTela = () => {
  setTelaPerfis(!telaPerfis)
}

return (
  <div>
    {telaPerfis ?
    <div>
      {
        perfil.id ?
        <p>{perfil.name}</p>
          :
        <p> Não tem mais perfis disponível</p>
      }
      <button onClick={novoPerfil}>Match</button>
      </div>
      :
      <TelaMatch perfil={perfil}/>
      }
      <button onClick ={mudaTela}>Ver Perfil</button>
    </div>    
    
  
)

}

export default App;