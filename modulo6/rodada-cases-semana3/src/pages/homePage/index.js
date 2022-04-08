import axios from "axios"
import React, { useEffect, useState } from "react"
import {BASE_URL} from '../../constants/BASE_URL'
import {API_KEY} from '../../constants/API_KEY'
import { goToDetailsPage } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import Header from '../../components/header/index'
import {HomePageContainer, Card, NextButton} from './styled'
import {FilterPage} from '../../components/filter/index'






const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1)

  const history = useHistory();

  const getMovies = (setData) => {
    axios
      .get(`${BASE_URL}/movie/popular/?${API_KEY}&language=pt-BR&page=1`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getMovies(setMovieData);
  }, []);

  

 

    const pageNext = (number) => {
        setPage(page + number)
        window.scrollTo(0,0)
    }
    const pageBack = (number) => {
        if(page >= 2){
            setPage(page - number)
        }
        window.scrollTo(0,0)
    }

  

  const cardInfo = movieData.map((movie) => {
    return (
      

      
      <div key = {movie.id}>
        
                
        <Card>
       
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => goToDetailsPage(history, movie.id)}/>
        
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
        </Card>      

                 
      </div>
      
    );
  });
  console.log(movieData);

  return (

    <div>
      <Header/>
    <HomePageContainer>

       
             
      <FilterPage/>
    
    {cardInfo}
    
           

     
  {/* <button onClick={(() =>{pageBack(1)})}> VOLTAR </button> 
  <button onClick={(() =>{pageNext(1)})}> PROXIMO </button> */}
     

    </HomePageContainer>
    </div>
  );
};

export default HomePage