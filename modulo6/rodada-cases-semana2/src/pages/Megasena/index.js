import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import {
    GeneralContainer,
    LeftCol,
    RightCol,
    TitleWrap,
    Title,
    LogoLoterias,
    NumbersWrap,
    GameTitle,
    GameNumberDate,
    Obs,
  } from "./styled"
  import logoLoterias from "../../img/logo_cef.svg"
  import NumbersList from "../../components/NumberList/index";



  const Megasena = () => {
    const [relacaoConcurso, setRelacaoConcurso] = useState([])
    const [concursoId, setConcursoId] = useState("")
    const [concursos, setConcursos] = useState([])
  
    const getRelacaoConcursos = () => {
      axios
        .get(`${BASE_URL}/loterias-concursos`)
        .then((res) => {
          setRelacaoConcurso(res.data[0])
          if (relacaoConcurso) {
            setConcursoId(res.data[0].concursoId)
          }
  
         
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    const getConcursosById = (id) => {
      axios
        .get(`${BASE_URL}/concursos/${id}`)
        .then((res) => {
          setConcursos(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  
    useEffect(() => {
      getRelacaoConcursos();
      getConcursosById(concursoId)
    }, [concursoId])
  
      
    const data = new Date(concursos?.data)
    const formatedDate = data.toLocaleDateString("pt-BR", { timeZone: "UTC" })
  
    return (
      <GeneralContainer>
        <LeftCol></LeftCol>
        <TitleWrap>
          <LogoLoterias src={logoLoterias} />
          <Title>MEGA-SENA</Title>
        </TitleWrap>
        <GameTitle>
          <p>CONCURSO</p>
        </GameTitle>
        <GameNumberDate>
          <p>
            {concursos.id} - {data && formatedDate}
          </p>
        </GameNumberDate>
        <RightCol>
          <NumbersWrap>
            <ul>
              {concursos.numeros &&
                concursos.numeros.map((item) => (
                  <NumbersList numbers={item} key={item} />
                ))}
            </ul>
          </NumbersWrap>
          <Obs>
            Este sorteio ?? meramente ilustrativo e n??o possui nenhuma liga????o com
            a CAIXA.
          </Obs>
        </RightCol>
      </GeneralContainer>
    )
  }
  
  export default Megasena