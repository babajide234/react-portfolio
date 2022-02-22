
import styled from 'styled-components'
// import {Link  as LinkR} from 'react-router-dom'
import {Link  as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    @media screen and (max-width:480px){
        width: 100%;
    }
`
export const NavigationBtn = styled.label`
    width: 30px;
    height: 30px;
    position: fixed;
    right: 60px;
    top: 50px;
    z-index: 2200;
    &:hover {
        cursor: pointer; 
    }
    @media only screen and (max-width: 480px) {
        right: 30px;
        top: 40px; 
    }
`
export const NavigationIcon = styled.span`
    &,
    &::after,
    &::before{
        width: 29px;
        height: 4.8px;
        margin: 0 0 0 0;
        background-color: #d41616;
        display: block;
        border-radius: 3px;
        position: relative;
        transition: all .3s ease-in-out;
    }
    &::after,
    &::before{
        content: '';
        position: absolute;
        left: 0; 
    }

    &::after {
        top: -10px; 
    }
      
    &::before {
        top: 10px; 
    }
`
export const NavBackground = styled.div`
    height: 100vh;
    width: 0%;
    position: fixed;
    top: 0;
    right: 0;  
    z-index: 1000;
    background-image: radial-gradient(circle, #c3073f, #b80540, #ac0441, #a10541, #950740);
    transition: width .8s cubic-bezier(0.68,-0.55,0.27,1.55);;
    z-index: 1000;
`

export const Navigation = styled.div`
    width: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: -500px;
    z-index: 1000;
    animation: animate__fadeOutLeft;
    transition: all .6s ease-in-out;
    transition-delay: .3s;
`

export const Navlist = styled.ul`
    text-align: center;
    list-style-type: none;
    opacity: 0;
    transition: opacity .2s ease;
`
export const Navlistitem = styled.li`
    margin-bottom: 15px; 
`

export const Navlink = styled(LinkS)`
    font-family: Lato;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    text-decoration:none;
    &:hover{
        color: #F1F9C4; 
    }
    @media only screen and (max-width: 480px) {
        font-family: Lato;
        font-size: 35px;
        font-style: normal;
        font-weight: 800;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: center; 
    }
`
export const NavigationCheck = styled.input`
    display: none; 
    &:checked  ~ ${NavBackground} {
        width:100%;
    }
    &:checked  ~ ${NavBackground} {
        width:100%;
    }
    
    &:checked ~ ${NavigationBtn} ${NavigationIcon} {
        background: transparent; 
    }

    &:checked ~ ${NavigationBtn} ${NavigationIcon}::after, 
    &:checked ~ ${NavigationBtn} ${NavigationIcon}::before {
        background-color: #fff; 
    }
    
    &:checked ~ ${NavigationBtn} ${NavigationIcon}::after {
        top: 0;
        transform: rotate(45deg); 
    }
    
    &:checked ~ ${NavigationBtn} ${NavigationIcon}::before {
        top: 0;
        transform: rotate(-45deg); 
    }
    &:checked ~ ${Navigation}{
        width: 100%;
        left: 0; 
    }
    &:checked ~ ${Navigation} ${Navlist} {
        opacity: 1; 
    }
`



