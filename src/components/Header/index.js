import React from 'react'
import { Header as Head,HeaderContainer,HeaderImg,HeaderContent,HeaderMain,HeaderSub,HeaderBtnHolder,HeaderLinkPrimary,HeaderLinkSecondary} from './HeaderElements'

const Header = () => {
    return (
        <>
          <Head>
            <HeaderContainer>
                <HeaderImg></HeaderImg>
                <HeaderContent>
                    <HeaderMain
                        animate={{fontSize:50}}
                    >Hi, I am BabaJide</HeaderMain>
                    <HeaderSub>Full Stack Developer</HeaderSub>
                    <HeaderBtnHolder>
                        <HeaderLinkPrimary to="#about">learn more</HeaderLinkPrimary>
                        <HeaderLinkSecondary to="#contact">Contact me</HeaderLinkSecondary>
                    </HeaderBtnHolder>
                </HeaderContent>
            </HeaderContainer>
          </Head>  
        </>
    )
}

export default Header
