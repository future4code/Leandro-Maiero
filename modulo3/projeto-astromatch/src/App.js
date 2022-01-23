import axios from "axios";
import { useEffect, useState } from "react";
import TelaMatch from "./Components/TelaMatch";


function App(){
  const [perfil, setPerfil] = useState({})
  const [proximo, setProximo] = useState(0)
  const [telaPerfis, setTelaPerfis] = useState(true)
  const [carregando, setCarregando] = useState("")
  const [like, setLike] = useState(false)

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

const verPerfil = () => {
  setTelaPerfis(!telaPerfis)
}

const curtirPerfil = (like) => {
  setLike(like)
  enviarLike()
  novoPerfil()
}

const enviarLike = () =>{
  const body = {
    id: perfil.id,
    choice: like
  }
  console.log(body)
  axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leandro-maiero/choose-person", body)
  .then((resp)=>{
    console.log(resp)
    if (resp.data.isMatch){
      window.alert("Você tem um novo match")
    }
   })
    .catch((err)=>{
      console.log(err.response)
    
  })
}

return (
  <div>
    {
     telaPerfis ?
     <div>
      {
        perfil.id ?
        <>
        <p>{perfil.name}</p>
        <button onClick ={()=> curtirPerfil(true)}>like</button>
        <button onClick ={()=> curtirPerfil(false)}>deslike</button>
        </>  
          :
        <p> Não tem mais perfis disponível</p>
      }
      <button onClick={novoPerfil}>Match</button>
      </div>
      :
      <TelaMatch perfil={perfil}/>
      }
      <button onClick ={verPerfil}>Ver Perfil</button>
    </div>    
    
  
)

}

export default App;