import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPessoal from './components/ImagemPessoal/ImagemPessoal.png';

import styled from 'styled-components';
import CardPequeno from './components/CardPequeno/CardPequeno';






function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPessoal} 
          nome="Leandro Gino Maiero" 
          descricao="Oi, eu sou o Leandro. Estudante da Labenu. Estou aprendendo a programar!."
        />
        
      <CardPequeno
          
          imagem="https://cdn-icons-png.flaticon.com/512/747/747314.png"
          nome="e-mail:"
          descricao="leandro.gmaiero@gmail.com"
        
      />
      
      <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
          nome="Endereço:"
          descricao="Rua React da Labenu, HTML5 - SP"

      />




        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Porto Seguro Seguros S.A" 
          descricao="Mecânico Tecnico" 
        />
        
        <CardGrande 
          imagem="https://mindset.pro.br/wp-content/uploads/2019/03/votorantim.png" 
          nome="Votorantim Metais Niquél S.A" 
          descricao="Compras" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8-kfujLeSlZOqKVmwc1WvKXLFOApBB0WyCS13ARiciMHv2h18LVmyPOQMZb7CjZX_30&usqp=CAU"
          texto="GitHub" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          texto="LinkedIn" 
        />        
      </div>
    </div>
  );
}

export default App;
