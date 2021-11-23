import React from "react";
import axios from "axios";



class CriarPlaylist extends React.Component{
    state = {
        playlist:[],
        nome:""
    };

    onChangeInput = (event) => {
     this.setState({ playlist: event.target.value })
    }    


    createPlaylist = () => {
        const body = { name: this.state.playlist};

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
           body, { headers:{ Authorization: "leandro-maiero-carver" }
            })
            .then((response)=>{
                this.setState({playlist:""})
                alert("Playlist criada!")
            })
            .catch((error)=>{
                alert("Não foi possivel criar sua nova playlist, tente novamente")
            });
    };








    render() { 

        
    
    return(
        <div>
        <input type='text'
        placeholder ='New Playlist'        
        onChange={this.onChangeInput} />
        <button onClick={this.createPlaylist}>Adicionar</button>
        
        </div>
        

    )

    }


}
export default CriarPlaylist;



