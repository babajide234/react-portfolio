import React from 'react'
import {FaTwitter,FaCodepen,FaGithub} from 'react-icons/fa'
import {FooterSection,FooterWrapper,FooterContent,FooterLinks,FooterSocial} from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <FooterWrapper>
                    <FooterContent>
                        <FooterLinks>
                            <div>
                                <FooterSocial><FaTwitter/></FooterSocial>
                                <FooterSocial><FaCodepen/></FooterSocial>
                                <FooterSocial><FaGithub/></FooterSocial>
                            </div>
                            <h3>09055548937 , 08135298896</h3>
                        </FooterLinks>
                        <p>© Babajide Tomoshegbo, 2021. All rights reserved.</p>
                    </FooterContent>
                </FooterWrapper>
            </FooterSection>
        </>
    )
}

export default Footer
