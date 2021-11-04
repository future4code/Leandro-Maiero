import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Leandro'}
          fotoUsuario={'https://picsum.photos/60/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

       
        <Post
          nomeUsuario={'Lais'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/300/250'}
        />
      
      <Post
          nomeUsuario={'Karine'}
          fotoUsuario={'https://picsum.photos/80/50'}
          fotoPost={'https://picsum.photos/200/160'}
        />
      
            
      </MainContainer>
    );
  }
}

export default App;
