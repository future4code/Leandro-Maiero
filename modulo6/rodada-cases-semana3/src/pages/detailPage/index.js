import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { BASE_URL } from '../../constants/BASE_URL';
import { API_KEY } from '../../constants/API_KEY';
import Header from '../../components/header/index';
import { goToDetailsPage } from '../../routes/coordinator';

import {
  DetailsContainer,
  CardDetail,
  OverviewText,
  VoteAverage,
  TitleText,
  DateMovie,
  Sinopse,
  AvaliaçãoText,
  CastCard,
  StyledCastDetails,
  CostText,
  RecomendaText,
  RecomendationsCard,
  RecomendationsDetails
 
} from './styled'




const DetailsPage = () => {

  
  const params = useParams();
  const [detailData, setDetailData] = useState([]);
  const [cast, setCast] = useState([])
  const [recommendations, setRecommendations] = useState([])

  

  
  const history = useHistory();



  const getDetails = (setData, id) => {
    axios
      .get(`${BASE_URL}/movie/${id}?${API_KEY}&language=pt-BR`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


   const getMovieCast = (setCast, id) => {
    
    axios.get(`${BASE_URL}/movie/${id}/credits?${API_KEY}&language=pt-BR`)
        .then((res) => {
          
            setCast(res.data.cast)
            
        })
        .catch((err) => {
          console.log(err.message);
        })
}
  
console.log(detailData);  

const castActor = cast.map((cast) =>{
  
  return(
    
    <CastCard key = {cast.cast_id}>
      <img src = {`https://image.tmdb.org/t/p/original/${cast.profile_path}`}/>
      <p>{cast.name}</p>

    </CastCard>
  )
})

 const clickRecommendation = (id) =>{
   goToDetailsPage(history, id)
 } 

 
 
  
  function getRecommendations(setRecommendations, id) {

    axios
        .get(`${BASE_URL}/movie/${id}/recommendations?${API_KEY}&language=pt-BR`)
        .then((res) => {
            setRecommendations(res.data.results)
        })
        .catch((err) => {
          console.log(err.message);
        })
}

const recommendationList = recommendations.map((item) => {
  
    
    return (

        <div key = {item.id} >
        <RecomendationsCard  onClick={() =>clickRecommendation(item.id)} >

            

            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
           
            <p>{item.title}</p>
               
            </RecomendationsCard>
        </div>
    )
})  
                
            
 






useEffect(() => {
  getDetails(setDetailData, params.id);
  getMovieCast(setCast, params.id)
  getRecommendations(setRecommendations, params.id)

  
}, []);


  return (
    <div>
      <Header />
      
      <DetailsContainer>
    
        <CardDetail src={`https://image.tmdb.org/t/p/original/${detailData.poster_path}`} />
        <TitleText>
          {detailData.title}
        </TitleText>

        <AvaliaçãoText>
          <p>Avaliação dos usuários</p>
        </AvaliaçãoText>

    
        <VoteAverage>
        
          {detailData.vote_average * 10}     %
          
        </VoteAverage>
       

        <DateMovie>
          {detailData.release_date} -  {detailData.runtime}  Min
        </DateMovie>

        <Sinopse>
          <p>Sinopse:</p>
        </Sinopse>
        <OverviewText>
          {detailData.overview}
          
        </OverviewText>

        
        
      </DetailsContainer>

      <StyledCastDetails>
        <CostText>Elenco original</CostText>
        {castActor}
      </StyledCastDetails>
     <RecomendationsDetails>
       <RecomendaText>Recomendações</RecomendaText>
       {recommendationList}
     </RecomendationsDetails>
    </div>
  );
};

export default DetailsPage



  // detailData.runtime