import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const FooterSection = styled.div`
    height: 125px;
    width: 100%;
    border-radius: 0px;
    background: #D41616; 
    @media only screen and (max-width: 480px) {
        height: 228px;
        padding-top: 79px; 
    } 
`
export const FooterWrapper = styled.div`
    width: 80%;
    margin: 0 auto; 
`
export const FooterContent = styled.div`
    display: flex;
    width: 100%;
    height: 125px;
    align-items: center;
    color: white;
    justify-content: space-between; 
    @media only screen and (max-width: 480px) {
        flex-flow: row wrap;
        justify-content: none; 
        & h3 {
          font-size: 15px;
          font-weight: 700;
          line-height: 35px; 
        }       
        & p {
          font-family: Kulim Park;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 29px;
          letter-spacing: 0em;
          text-align: center;
          margin-top: 30px; 
        }
    } 
    & h3 {
      font-family: Kulim Park;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 41px;
      letter-spacing: 0em;
      text-align: left; 
    }

    & p {
      font-family: Kulim Park;
      font-size: 21px;
      font-style: normal;
      font-weight: 700;
      line-height: 41px;
      letter-spacing: 0em;
      text-align: left; 
    }
`
export const FooterLinks = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 50%; 
& div {
  width: 50%;
  float: left;
  text-align: center; 
}
@media only screen and (max-width: 480px) {
    width: 100%;
    flex-flow: row wrap;
    justify-content: center; 
} 
`
export const FooterSocial = styled(Link)`
      color: white;
      font-size: 30px;
      margin-right: 30px; 
      @media only screen and (max-width: 480px) {
          font-size: 20px;
          margin-right: 20px; 
           &:last-child {
            margin-right: 0; 
          } 
      }
      &:hover {
        color: #F1F9C4; 
      }

`
