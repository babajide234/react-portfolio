
import styled from 'styled-components'
// import {Link  as LinkR} from 'react-router-dom'
// import {Link  as LinkS} from 'react-scroll'


export const AboutUs = styled.section`
    height: 637px;
    margin: 86px 0 38px;
    background-color: #ffffff;
    text-align: center; 
    @media only screen and (max-width: 480px) {
        border-radius: 50px 50px 0px 0px;
        z-index: 100;
        margin-top: -50px; 
    } 
`

export const AboutWrapper = styled.div`
    width: 859px;
    margin: 0 auto; 
    @media only screen and (max-width: 480px) {
        width: 100%;
        padding-top: 80px; 
    } 
`

export const AboutHeader =styled.h2`
    font-family: Lato;
    font-size: 45px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000; }
    @media only screen and (max-width: 480px) {
        font-family: Lato;
        font-size: 30px;
        font-style: normal;
        font-weight: 800;
        line-height: 42px;
        letter-spacing: 0em; 
    } 
`

export const AboutLine = styled.span`
    display: block;
    width: 650px;
    height: 0.3px;
    flex-grow: 0;
    background-color: #d41616;
    margin: 35px auto 88px; 
    @media only screen and (max-width: 480px) {
    
        width: 250px;
        margin: 30px auto; 
    } 
`

export const AboutParagraph = styled.p`
    font-family: Kulim Park;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.95;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
    margin-bottom: 80px; 
    @media only screen and (max-width: 480px) {
        font-family: Kulim Park;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        margin: 0 35px; 
    } 
  
`