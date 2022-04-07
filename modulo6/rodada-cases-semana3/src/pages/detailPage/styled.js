import styled from "styled-components"





export const DetailsContainer = styled.div`
position: absolute;
width: 100vw;
height: 600px;
left: 0px;
top: 56px;

background: #2D0C5E;
`

export const CardDetail = styled.img`

position: absolute;
width: 383px;
height: 574px;
left: 112px;
top: 128px;

background: url(image.png);
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 8px;

`

export const OverviewText = styled.div`

position: absolute;
width: 696px;
height: 120px;
left: 528px;
top: 340px;

font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

display: flex;
align-items: center;
letter-spacing: -0.005em;

/* Neutral Colors / Gray / Gray 300 */

color: #DDDDDD;

`


export const VoteAverage = styled.div`

position: absolute;
width: 31px;
height: 38px;
left: 542.7px;
top: 225.7px;


font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 38px;
/* identical to box height, or 238% */

display: flex;
align-items: center;
letter-spacing: -0.005em;

color: #14FF00;

p{
    position: absolute;
width: 102px;
height: 40px;
left: 601px;
top: 225px;


font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
/* or 125% */

display: flex;
align-items: center;

color: #FFFFFF;
}

`
export const Ellipse = styled.div`

position: absolute;
width: 60px;
height: 60px;
left: 529.42px;
top: 275.4px;

background: #14FF00;
border-radius: 100px;
transform: rotate(-91.35deg);


`

export const TitleText = styled.div`
position: absolute;
width: 238px;
height: 38px;
left: 528px;
top: 128px;

/* Desktop/H2/Left */

font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 38px;
/* identical to box height, or 119% */

display: flex;
align-items: center;
letter-spacing: -0.005em;

color: #FFFFFF;


`


export const DateMovie = styled.div`
position: absolute;
width: 684px;
height: 24px;
left: 528px;
top: 174px;


font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */

display: flex;
align-items: center;

color: #FFFFFF;


`


export const TimeMovie = styled.div`

position: absolute;
width: 684px;
height: 24px;
left: 528px;
top: 174px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */

display: flex;
align-items: center;

color: #FFFFFF;


` 