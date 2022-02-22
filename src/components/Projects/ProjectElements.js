import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Projects = styled.section`
    width: 100%;
    left: 0px;
    top: 2921px;
    min-height: 1450px;
    border-radius: 0px;
    background: linear-gradient(90deg, #FCF0F0 0%, #F1F9C4 100%); 
    @media only screen and (max-width: 480px) {
        top: 0;
        min-height: 1000px; 
    } 
`
export const ProjectsContent    = styled.div`
    padding-top: 130px;
    padding-bottom: 190px;
    display: flex;
    flex-direction: column;
    position: relative; 
    @media only screen and (max-width: 480px) {
        flex-flow: row wrap;
        justify-content: center;
        padding-top: 70px; 
    }
`
export const ProjectHeading = styled.h2`
    font-family: Lato;
    font-size: 45px;
    font-style: normal;
    font-weight: 800;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 130px; 
    @media only screen and (max-width: 480px) {
        font-family: Lato;
        font-size: 35px;
        font-style: normal;
        font-weight: 800;
        line-height: 42px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 50px; 
    } 
`
export const ProjectsWrapper    = styled.div`
    width: 80%;
    margin: 0 auto; 
    @media only screen and (max-width: 480px) {
        width: 100%; 
    } 
`
export const ProjectTitle = styled.h3`
    text-align: center;
    color: #000000;
    text-transform: capitalize;
    font-family: Lato;
    font-size: 45px;
    font-style: normal;
    font-weight: 800;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;
    height: 108px;
    width: 167px; 
    @media only screen and (max-width: 480px) {
        font-family: Lato;
        font-size: 30px;
        font-style: normal;
        font-weight: 800;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: center;
        height: 0;
        width: 100%; 
    } 
`
export const ProjectLink1 = styled(Link)`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 60px; 
    height: 1014px;
    width: 500px;
    border-radius: 30px;
    left: 0;
    top: 300px; 
    @media only screen and (max-width: 480px) {
          height: 200px;
          width: 310px;
          border-radius: 10px;
          margin: 15px auto;
          order: 0; 
          width: 100%;
          position: static; 
    } 
`
export const ProjectLink2 = styled(Link)`
height: 300px;
width: 541px;
border-radius: 30px;
right: 0;
top: 300px; 
background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 60px;
@media only screen and (max-width: 480px) {
    height: 200px;
    width: 310px;
    left: 0px;
    border-radius: 10px;
    order: 4;
    margin-bottom: 15px; 
    position: static;
}
`
export const ProjectLink3 = styled(Link)`
height: 300px;
width: 256px;
border-radius: 30px;
right: 285px;
top: 630px; 
background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 60px;
@media only screen and (max-width: 480px) {
    height: 150px;
    width: 150px;
    border-radius: 10px;
    order: 2;
    margin-right: 5px;
    margin-bottom: 15px; 
    position: static;
}
`
export const ProjectLink4 = styled(Link)`
height: 447px;
width: 247px;
border-radius: 30px;
right: 0;
top: 630px; 
background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 60px;
@media only screen and (max-width: 480px) {
    height: 150px;
    width: 150px;
    border-radius: 10px;
    order: 3;
    margin-left: 5px;
    margin-bottom: 15px; 
    position: static;
}
`
export const ProjectLink5 = styled(Link)`
height: 300px;
width: 256px;
border-radius: 30px;
right: 285px;
top: 1017px; 
background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 60px;
@media only screen and (max-width: 480px) {
    height: 150px;
    width: 150px;
    border-radius: 10px;
    order: 5;
    margin-right: 5px; 
    position: static;
} 
`
export const ProjectLink6 = styled(Link)`
height: 195px;
width: 247px;
border-radius: 30px;
right: 0;
top: 1120px; 
background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 60px;
@media only screen and (max-width: 480px) { 
    height: 150px;
    width: 150px;
    border-radius: 10px;
    order: 6;
    margin-left: 5px; 
    position: static;
} 
`