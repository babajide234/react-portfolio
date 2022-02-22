import styled from 'styled-components'
// import {Link  as LinkS} from 'react-scroll'



export const Lang =styled.section`
height: 1034px;
position: relative; 
@media only screen and (max-width: 480px) {
    height: 100vh; 
} 
`
export const LangWrapper = styled.div`
width: 80%;
margin: 0 auto; 
@media only screen and (max-width: 480px) {
    width: 100%; 
} 
`
export const LangContent = styled.div`
    width: 500px;
    margin-left: 20px; 
    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-left: 0; 
    } 
`
export const LangHeader = styled.h2`
    font-family: Lato;
    font-size: 45px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000; 
    text-align: left;
    margin-bottom: 22px; 
    @media only screen and (max-width: 480px) {
      text-align: center; 
      font-family: Lato;
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 42px;
      letter-spacing: 0em; 
    } 
`
export const LangItems = styled.div`
    display: grid;
    grid-template-areas: '. . .'; 
    @media only screen and (max-width: 480px) {
        grid-template-columns: repeat(1, 50%);
        grid-template-rows: repeat(2, 50%);
        grid-template-areas: ". ."
                             ". .";
        margin: 0 auto;
        width: 90%; } 
`
export const LangDiv = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column; 
    &:first-of-type {
        margin-bottom: 40px; 
    }
    @media only screen and (max-width: 480px) {
        margin-left: 30px; 
    } 
`
export const LangLang = styled.span`
    font-family: Kulim Park;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.95;
    letter-spacing: normal;
    text-align: left;
    color: #000000; 
    @media only screen and (max-width: 480px) {
    &:nth-child(-n+3) {
        margin: 0 0; 
    } 
`


export const LangImg1 =styled.img`
    height: 557px;
    width: 825px;
    border-radius: 40px;
    margin-top: 150px; 
    @media only screen and (max-width: 480px) {
        height: 162px;
        width: 276px;
        border-radius: 15px;
        margin: 20px auto;
        display: block; 
    } 
`
export const LangImg2 =styled.img`
    height: 664px;
    width: 523px;
    top: 0px;
    right: 150px;
    border-radius: 50px;
    position: absolute;
    border: 15px solid white; 
    @media only screen and (max-width: 480px) {
        height: 243px;
        width: 169px;
        right: 20px;
        top: 192px;
        border-radius: 20px; 
    } 
`