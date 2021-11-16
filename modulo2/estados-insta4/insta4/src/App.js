import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
`

const NovoPostUsuario = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 8px;
  input, button {
    margin: 3px;
  }
`


class App extends React.Component {
  
  state = {
    postagem: [
      {
        nomeUsuario:"Leandro",
        fotoUsuario:"https://picsum.photos/60/50",
        fotoPost:"https://picsum.photos/200/150"
      },
      {
        nomeUsuario:"Lais",
        fotoUsuario:"https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/300/250"
      },
      {
        nomeUsuario:"Karine",
        fotoUsuario:"https://picsum.photos/80/50",
        fotoPost:"https://picsum.photos/200/160"
       }
    ],
  
    valorIputnomeUsuario:"",
    valorIputFotoUsuario:"",
    valorIputFotoPost:"",

  };
  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onchangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  adicionaPerfil = () => {

    const novoUsuario = {
      nomeUsuario: this.state.valorInputUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPerfil = [...this.state.postagem, novoUsuario]

    this.setState({postagem: novoPerfil});
    this.setState({ valorInputUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: ""});

  };

  render() {
    const perfis = this.state.postagem.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />

        )
      })
  
      return (
        <MainContainer>
          <NovoPostUsuario>
            <input
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Nome de usuário"}
            />
  
            <input
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"Foto do perfil"}
            />
  
            <input
              value={this.state.valorInputFotoPost}
              onChange={this.onchangeInputFotoPost}
              placeholder={"Foto da postagem"}
            />
            <button onClick={this.adicionaPerfil}>Adicionar</button>
          </NovoPostUsuario>
  
          {perfis}
        </MainContainer>
      );
      }
    }

  

export default App;
