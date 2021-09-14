import React from 'react';
import logo from './image/logo1.png';
import {HeaderContainer, HeadWrapper, Logo, NavWrapper, NavOption, HeadTitle} from './Style';

const Header = () => {
    return (
        <HeaderContainer>
            <HeadWrapper>
                <Logo img src={logo} alt="logo"></Logo>
                <NavWrapper>
                    <NavOption href="#about">ABOUT</NavOption>
                    <NavOption href="#work">WORK</NavOption>
                    <NavOption href="#contact">CONTACT</NavOption>
                </NavWrapper>
            </HeadWrapper>
            <HeadTitle>I'm Chris Weng<br/>A Front End Developer</HeadTitle>
        </HeaderContainer>
    )
}

export default Header;