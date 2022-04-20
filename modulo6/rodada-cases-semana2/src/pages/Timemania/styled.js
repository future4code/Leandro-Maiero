import styled from "styled-components"
import { colors } from "../../constants/colors"

export const GeneralContainer = styled.div`
  display: flex;
  background-color: #efefef;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 1250px;
  }
`
export const LeftCol = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background: ${colors.timemania};
  z-index: 0;
 
  transform-origin: right bottom;
  position: relative;

  @media screen and (max-width: 900px) {
    flex: unset;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform-origin: top right;
    height: 39%;
  }
`

export const RightCol = styled.div`
  flex: 0.7;
  flex-direction: column;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex: unset;
    margin-right: 1.5em;
    height: 57%;
  }
`

export const TitleWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  top: 50%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    top: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10em;
  }
`

export const Title = styled.p`
  color: #fff;
  font-size: 1.7rem;
  font-weight: 600;
  padding: 0 0.8em;

  @media screen and (max-width: 900px) {
    padding: 0;
    line-height: 0;
  }
`

export const LogoLoterias = styled.img`
  color: #fff;
  width: 60px;
  height: 60px;
`

export const NumbersWrap = styled.div`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
`

export const GameTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  bottom: 10%;

  p {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 900px) {
    bottom: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 19em;
  }
`

export const GameNumberDate = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  left: 7.5%;
  bottom: 5%;
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;

  @media screen and (max-width: 900px) {
    bottom: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 16em;
  }
`

export const Obs = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  text-align: justify;
  line-height: 1.3;
  margin-top: 30px;
  color: #595959;

  @media screen and (min-width: 900px) {
    position: absolute;
    bottom: 10%;
  }
`