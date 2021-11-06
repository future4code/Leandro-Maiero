import React from 'react';
import logo from './logo.svg';
import './App.css';
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;1,400&family=Open+Sans:wght@300&family=Satisfy&family=Ubuntu:ital,wght@1,300&family=Zen+Kaku+Gothic+New&display=swap" rel="stylesheet"/>
function App() {
  const titulo = "Titulo do vídeo"
  
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
    
}

  return (
    <div>
      
          <div className="tela-inteira">        
        <header className="header">     

            <h1>LabTube®</h1>
            <img className = "imgTopo" src= "https://www.freepnglogos.com/uploads/youtube-logo-transparent-10.png" alt=""/>
            <input type="text" placeholder="Busca" id="campoDeBusca"/> </header>    

            
        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Em alta</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <hr/>
                    <li className="botoes-meunu-vertical"/>Originais
                    <li className="botoes-meunu-vertical">Histórico</li>
                </ul>
            </nav>
             
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4/>{titulo}
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4/>{titulo}
                </div>
                
            </section>
        </main>
        
        
        <footer>
        
            <h4>LabTube®</h4>
            <h5><i>Os melhores videos é aqui!</i></h5>
        </footer>
    </div>
  
</div>


);
 

  
}

export default App;
