import React, { Component } from 'react';
import axios from 'axios';
import {Interface, Botao1} from './interfaceUsuario'
import PaginaUsuarios from './components/PaginaUsuarios'



export default class App extends React.Component {
  state = {
    nomeUsuario: "",
    emailUsuario: "",
    listaDeUsuario:[],
    userId: "",
    usuario: {},
  
  }

  

  handleNomeUsuario = (e) => {
    this.setState({ nomeUsuario: e.target.value });
  };

  handleEmailUsuario = (e) => {
    this.setState({ emailUsuario: e.target.value });
  };
  
  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers:{Authorization: 'leandro-maiero-carver'}
      }
    )
    .then((resposta)=>{
      this.setState({ listaDeUsuario: resposta.data.result.users})
      console.log(resposta.data.result.users)
    })
    .catch((erro)=> {
      console.log(erro.response)
    })
  }

  getUserById = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id', 
      {
        headers:{Authorization: 'leandro-maiero-carver'}
      })

    .then((resposta) => {
      console.log(resposta)
    })
    .catch((erro) => {
      console.log(erro.response)
    })
  }

  searchUsers =() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=&email=',
      {
        headers:{Authorization: 'leandro-maiero-carver'}
      }
    )
  }

  createUser = () => {
    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,
      { 
        headers:{Authorization: 'leandro-maiero-carver'}
      })
    .then(() => {
      this.setState({nomeUsuario: ''})
      this.setState({emailUsuario: ''})
      alert('Novo Usuário Cadastrado')
    })
    .catch((erro) => {
      console.log(erro.response.data);
      alert('Usuário não Cadastrado, tente novamente!')
    });
    console.log(body)
  }

  editUser = () => {
    axios.put('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id',
      {
        headers:{Authorization: 'leandro-maiero-carver'}
      }
    )
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
      headers:{Authorization: 'leandro-maiero-carver'}
    })
    .then(() => {
      this.setState({listaDeUsuario: ''})
      alert('Usuario deletado')
    })
    .catch((err) => {
      console.log(err.response.data)
      alert('Não foi possível deletar o usuario')
    })
  }


  render() {
    console.log(this.state.listaDeUsuario)

    return(
      
      <Interface>
        <div>
        <p>Cadastro Usuário</p>
        </div>
        <input 
        placeholder={'Nome:'}
        value={this.state.nomeUsuario}
        onChange={this.handleNomeUsuario}
        />
      <input 
        placeholder={'Email:'}
        value={this.state.emailUsuario}
        onChange={this.handleEmailUsuario}
        />
        <div>
        <button onClick={this.createUser}>Enviar Cadastro</button>
        </div>
        <div>
        <button onClick={this.state.botao}> Ir para página de Usuários</button>
        </div>
      </Interface>

    )
  }

}