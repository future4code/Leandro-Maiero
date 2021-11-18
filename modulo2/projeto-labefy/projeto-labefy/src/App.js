import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";


const EstiloGlobal = createGlobalStyle`
*{
margin: 0;
padding: 0;
font-family: 'Courier New', Courier, monospace;
}
`


const Header = styled.div`

 width: 100%;
  height: 103px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color:white;
  text-align: center;
  justify-content: space-evenly;
  border: 5px solid black;
  font-size: 70px;
  
   

`
const Logo1 = styled.img`
  width: 190px;
  margin-top: 1px;  
`
const Logo2 = styled.img`
  width: 190px;
  margin-top: 1px;  
`

export default class App extends React.Component {
  

state = {
  nome:"",
  playlist:[]
}

componentDidMount(){
  this.getAllPlaylists()
}


getAllPlaylists = () =>{
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
 axios.get(url,{
     headers:{Authorization:'leandro-maiero-carver'}
 }) .then((resp)=>{
     console.log(res)
     this.setState({playlist: resp.data.result.list})
 }) .catch((error)=>{
     console.log(error)
     alert('ERROR')
 })

  }


createPlaylist = () => {
  const url =  'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
  const body = {name: this.state.nome
  }
  axios.post(url, body,{
    headers:{Authorization:'leandro-maiero-carver'}
})
.then((resp)=>{
    alert('Playlist criada com sucesso')
    this.setState({nome: ''})
})
.catch((error)=>{
    alert(error.response.data.message)
    this.setState({nome: ''})
})

}

     
  render(){ 

    console.log('estado', this.state.playlist)
   
    const mostraPlaylist = this.state.playlist.map((lista) =>{
      return (
          <li>{lista.name}</li>
      )
  }) 

    return (
      <>
      <EstiloGlobal/>
      <Header>
           <Logo1 src ='https://images.vexels.com/media/users/3/1555/raw/1e499899d16a9bed9da388d8234ac7a6-tema-vector-music-equalizer.jpg'/>
            Labefy
            <Logo1 src ='https://images.vexels.com/media/users/3/1555/raw/1e499899d16a9bed9da388d8234ac7a6-tema-vector-music-equalizer.jpg'/>
      </Header>
      <div>
        <h3>Playlist</h3>
        <input type='text'
        placeholder ='New Playlist'
        value={this.state.nome}
        onChange={this.onChangeInput}/>
        <button onClick={this.createPlaylist}>Adicionar</button>
     </div>
      <div>
      {mostraPlaylist}
      </div>
      </>
    );

  }

}

  

 
