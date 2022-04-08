import styled from 'styled-components'


export const HomePageContainer = styled.div`
width: 100vw;
max-width: 100vw;
background-color: #fff;
display: flex;
margin-top: 420px ;
justify-content: space-evenly;
align-items: space-evenly;
flex-wrap: wrap;;
`



export const Card = styled.div`

display: flex;
flex-direction: column;
width: 13vw;
margin-top: 50px;
img{
      width: 100%;
}
h4{

font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;

color: #000000
}
p{

font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
display: flex;
align-items: center;
color: #646464;
}
`
export const NextButton = styled.div`
position: static;
width: 47px;
height: 24px;
left: 16px;
top: 8px;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

display: flex;
align-items: center;
text-align: center;

color: #5C16C5;

`


