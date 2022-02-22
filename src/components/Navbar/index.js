import React from 'react'
import { NavigationIcon, NavigationBtn,Nav, NavigationCheck, NavBackground, Navigation ,Navlist,Navlistitem,Navlink} from './NavbarElements';

const Navbar = () => {
    return (
       <>
            <Nav>
                <NavigationCheck type="checkbox" name="check" id="check"/>
                <NavigationBtn for="check">
                    <NavigationIcon></NavigationIcon>
                </NavigationBtn>
                <NavBackground></NavBackground>
                <Navigation>
                    <Navlist>
                        <Navlistitem><Navlink to='/'>Home</Navlink></Navlistitem>
                        <Navlistitem><Navlink to='#about'>About</Navlink></Navlistitem>
                        <Navlistitem><Navlink to='#languages'>Languages</Navlink></Navlistitem>
                        <Navlistitem><Navlink to='#project'>Projects</Navlink></Navlistitem>
                        <Navlistitem><Navlink to='#contact'>Contact</Navlink></Navlistitem>
                    </Navlist>
                </Navigation>
            </Nav>
       </>
    )
}
export default Navbar
