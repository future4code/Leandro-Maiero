import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import CriarPlaylist from "./Components/CriarPlaylist";




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
  justify-content: space-evenly;
  align-items: center; 
  text-align: center;
  background-color: black;
  color: white;  
  border: 15px solid black;
  font-size: 70px;
`
const Lista = styled.div`
  
    background: black;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin: 5px 20px; 
    display: flex;    
    align-items: center;
    justify-content: space-evenly;
    font-size: 20px;
    color: white;
    

`
const Corpo = styled.div`

margin-top: 1%;
padding: 5%;
justify-items: center;

`


const Dell = styled.img`
  width: 25px;
  cursor: pointer;
  
`

const Logo1 = styled.img`
  width: 190px;
  margin-top: 1px;  

`
const Logo2 = styled.img`
  width: 45px;
  
`






export default class App extends React.Component {
  
  state = {
    playlists: []
}
componentDidMount(){
    this.getAllPlaylists()
}

getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    axios.get(url, {
        headers: {Authorization: 'leandro-maiero-carver'}
    })
    .then((res) => {

        this.setState({playlists: res.data.result.list})
        this.getAllPlaylists()
    })
    .catch((err) => {
          console.log(err.data)
    })
}

deletePlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
    axios.delete(url, {
        headers:{Authorization: 'leandro-maiero-carver'}
    })
    .then((res) => {
        alert("Playlist deletada!")
        this.getAllPlaylistss()
    })
    .catch((err) => {
      console.log(err.data)
    })
}

render() {
    const playlistsList = this.state.playlists.map((item) => {
        return(
            <Lista key={item.id}>
              <Logo2 src = 'https://cdn-icons-png.flaticon.com/512/1765/1765746.png'/>
                {item.name}
              <Dell src ='https://cdn-icons.flaticon.com/png/512/656/premium/656857.png?token=exp=1637514560~hmac=5a07ec68df57737af953f4fc1a46b21e'
               onClick={() =>this.deletePlaylist(item.id)}/>
            </Lista>
        )
    })

    
    return(
        <div>
          <EstiloGlobal/>
      <Header>
           <Logo1 src ='https://images.vexels.com/media/users/3/1555/raw/1e499899d16a9bed9da388d8234ac7a6-tema-vector-music-equalizer.jpg'/>
            Labefy
           <Logo1 src ='https://images.vexels.com/media/users/3/1555/raw/1e499899d16a9bed9da388d8234ac7a6-tema-vector-music-equalizer.jpg'/>
      </Header>
      <Corpo>
        <h2>Criar nova Playlist</h2>
             <CriarPlaylist/>
             <h2><li>Suas Playlists</li></h2>
             {playlistsList}
      </Corpo>
      </div>
        
    )
}
} 
  

 
