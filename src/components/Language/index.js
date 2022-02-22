import React from 'react'
import {Lang,LangWrapper,LangContent,LangHeader,LangItems,LangDiv,LangLang,LangImg1,LangImg2} from './LangElements';
import Langimage from '../../images/rec1.jpg'
const Language = () => {
    return (
        <>
          <Lang>
                <LangWrapper>
                        <LangContent>
                            <LangHeader>Languages I Speak</LangHeader>
                            <LangItems>
                                <LangDiv>
                                    <LangLang>HTML5</LangLang>
                                    <LangLang>CSS3</LangLang>
                                    <LangLang>Javascript</LangLang>
                                </LangDiv>
                                <LangDiv>
                                    <LangLang>Sass</LangLang>
                                    <LangLang>Php</LangLang>
                                    <LangLang>Express</LangLang>
                                </LangDiv>
                                <LangDiv>
                                    <LangLang>Node.js</LangLang>
                                    <LangLang>React.js</LangLang>
                                    <LangLang>Vue.js</LangLang>
                                </LangDiv>
                            </LangItems>
                            <LangImg1 src={Langimage} alt="image"/>
                            <LangImg2 src={Langimage} alt="image"/>
                        </LangContent>
                </LangWrapper>    
          </Lang>  
        </>
    )
}

export default Language
