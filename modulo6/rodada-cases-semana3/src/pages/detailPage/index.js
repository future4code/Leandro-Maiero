import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { BASE_URL } from '../../constants/BASE_URL';
import { API_KEY } from '../../constants/API_KEY';
import Header from '../../components/header/index';
import {DetailsContainer,
        CardDetail,
        OverviewText, 
        VoteAverage, 
        TitleText, 
        DateMovie, 
        } from './styled'




const DetailsPage = () => {
    
    const [detailData, setDetailData] = useState([]);
    const params = useParams();
    


     const getDetails = (setData, id) => {
        axios
          .get(`${BASE_URL}/movie/${id}?${API_KEY}&language=pt-BR`)
          .then((res) => {
            setData(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      };
  
    useEffect(() => {
      getDetails(setDetailData, params.id);
    }, []);
  
    console.log(detailData);
    
  
    return (
      <div>
          <Header/>
      <DetailsContainer>    
        <CardDetail src={`https://image.tmdb.org/t/p/original/${detailData.poster_path}`}/>
        <TitleText>
              {detailData.title}
        </TitleText>
        
        <VoteAverage>
        {detailData.vote_average}%
        
        </VoteAverage>
        
      
        <DateMovie>
        {detailData.release_date}        
        </DateMovie>
        <OverviewText>
              {detailData.overview}              
        </OverviewText>
                               
        </DetailsContainer>  
      </div>
    );
  };

  export default DetailsPage



  // detailData.runtime