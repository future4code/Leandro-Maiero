import axios from "axios"
import React, { useEffect, useState } from "react"
import {BASE_URL} from '../../constants/BASE_URL'
import {API_KEY} from '../../constants/API_KEY'
import { goToDetailsPage } from '../../routes/coordinator';
import { useHistory } from "react-router-dom";
import Header from '../../components/header/index'
import {HomePageContainer, Card} from './styled'
import {FilterPage} from '../../components/filter/index'






const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  // const [page, setPage] = useState(1)
  

  const history = useHistory();

  const getMovies = (setMovieData) => {
    axios
      .get(`${BASE_URL}/movie/popular?${API_KEY}&language=pt-BR&page=1`)
      .then((res) => {
        setMovieData(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getMovies(setMovieData);
  }, []);

  

 

    // const pageNext = (number) => {
    //     setPage(page + number)
    //     window.scrollTo(0,0)
    // }
    // const pageBack = (number) => {
    //     if(page >= 2){
    //         setPage(page - number)
    //     }
    //     window.scrollTo(0,0)
    // }

  

  const cardInfo = movieData.length > 0 && movieData.map((movie) => {

    

    return (
      

      
      <div key = {movie.id}>
        
                
        <Card>
       
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
        alt ={`Poster filme`}
        onClick={() => goToDetailsPage(history, movie.id)}/>
        
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
        </Card>      

                 
      </div>
      
    );
  });
  

  return (

    <div>
      <Header/>
    <HomePageContainer>

       
             
      <FilterPage/>
    
    {cardInfo}
    
           

     
  
     

    </HomePageContainer>
    </div>
  );
};

export default HomePage