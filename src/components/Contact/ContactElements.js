import styled from 'styled-components'
import Contactimg from '../../images/contact.jpg'

export const ContactSection = styled.section`
padding: 151px 0px; 
`
export const ContactWrapper = styled.div`
    width: 80%;
    margin: 0 auto; 
    @media only screen and (max-width: 480px) {
        width: 100%; 
    } 
`
export const ContactContent = styled.div`
    width: 1131px;
    height: 991px;
    box-shadow: 3px 4px 50px 10px rgba(155, 155, 155, 0.2);
    border-radius: 30px;
    display: flex; 
    @media only screen and (max-width: 480px) {
        width: 95%;
        height: 735px;
        margin: 0 auto; 
    } 
`
export const ContactPic = styled.div`
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(${Contactimg});
    height: 991px;
    width: 462px;
    background-position: center;
    background-size: cover; 
    @media only screen and (max-width: 480px) {
        display: none; 
    } 
`
export const ContactForm = styled.div`
    display: flex;
    justify-content: center;
    width: 669px;
    padding: 128px 0; 
    @media only screen and (max-width: 480px) {    
        width: 100%;
        padding: 30px 0; 
    } 
`
export const ContactHeading = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center; 
`
export const CHeading = styled.h2`
    font-family: Lato;
    font-size: 45px;
    font-style: normal;
    font-weight: 800;
    line-height: 54px;
    letter-spacing: 0em; 
    @media only screen and (max-width: 480px) {
        font-family: Lato;
        font-size: 28px;
        font-style: normal;
        font-weight: 800;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: left; 
    }
    span {color: #D41616; }
`
export const CSubHeading = styled.p`
      font-family: Kulim Park;
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: 41px;
      letter-spacing: 0em;
      margin-bottom: 104px; 
      @media only screen and (max-width: 480px) {
          font-size: 15px; 
      } 
`