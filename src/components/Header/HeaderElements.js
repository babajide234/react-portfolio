import styled from 'styled-components'
import {Link  as LinkS} from 'react-scroll'
import Headerimage from '../../images/intro_holder.jpg';
import { motion } from "framer-motion";
export const Header = styled.header`

`

export const HeaderContainer = styled.div`
    display: flex;
    @media only screen and (max-width: 480px) {
          display: block;
          position: relative;
          z-index: -1;
    }
`

export const HeaderImg = styled.div`
    width: 50%;
    height: 100vh;
    border-bottom-right-radius: 150px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Headerimage});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat; 
    @media only screen and (max-width: 480px) {
        width: 100%;
        border-bottom-right-radius: 0px;
        background-size: cover;
        background-position-x: center; 
    }
`

export const HeaderContent = styled.div`
    width: 50%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap; 
    @media only screen and (max-width: 480px) {
        width: 100%;
        background-color: transparent;
        position: absolute;
        top: 0; 
    } 
`

export const HeaderMain = styled(motion.h1)`
    width: 464px;
    height: 72px;
    flex-grow: 0;
    font-family: Lato;
    font-size: 60px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #000000; 
    @media only screen and (max-width: 480px) {
        width: 100%;
        font-family: Lato;
        font-size: 40px;
        font-style: normal;
        font-weight: 800;
        line-height: 52px;
        letter-spacing: 0em;
        color: #fff;
        text-align: center; 
    } 

`

export const HeaderSub = styled.h2`
    font-family: Lato;
    font-size: 25px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000; 
    @media only screen and (max-width: 480px) {
        font-family: Lato;
        font-size: 17px;
        font-style: normal;
        font-weight: 800;
        line-height: 20px;
        letter-spacing: 0em;
        color: #fff; 
    } 
`

export const HeaderBtnHolder =styled.div`
    display: flex;
    margin-top: 80px;
    width: 485px;
    justify-content: space-between; 
    @media only screen and (max-width: 480px) {
        width: 100%;
        margin-top: 40px;
        justify-content: space-around; 
    } 
`


export const HeaderLinkPrimary = styled(LinkS)`
    width: 230px;
    height: 60px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 17px 6px rgba(212, 22, 54, 0.2);
    font-family: Kulim Park;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase; 
    border: solid 2px #d41616;
    background-color: #d41616;
    color: #ffffff; 
    @media only screen and (max-width: 480px) {
        width: 160px;
        height: 44px;
        font-family: Kulim Park;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center; 
    }
`

export const HeaderLinkSecondary = styled(LinkS)`
    width: 230px;
    height: 60px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 0 17px 6px rgba(212, 22, 54, 0.2);
    font-family: Kulim Park;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase; 
    border: solid 2px #ffffff;
    background-color: #ffffff;
    color: #d41616; 
    @media only screen and (max-width: 480px) {
        width: 160px;
        height: 44px;
        font-family: Kulim Park;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center; 
    }
`
