import React from 'react'
import {ContactSection,ContactWrapper,ContactHeading,CHeading,CSubHeading,ContactContent,ContactPic,ContactForm} from './ContactElements'

const Contact = () => {
    return (
        <>
            <ContactSection>
                <ContactWrapper>
                    <ContactHeading>
                        <CHeading></CHeading>
                        <CSubHeading></CSubHeading>
                    </ContactHeading>    
                    <ContactContent>
                        <ContactPic></ContactPic>
                        <ContactForm></ContactForm>
                    </ContactContent>
                </ContactWrapper>  
            </ContactSection>  
        </>
    )
}

export default Contact
