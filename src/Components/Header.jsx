import React from 'react';
import styled from 'styled-components';
import logo from './image/logo1.png';

const Header = () => {
    return (
        <OutsideContainer>
            <Container>
                <Logo img src={logo} alt="logo"></Logo>
                <NavWrapper>
                    <NavOption href="#about">ABOUT</NavOption>
                    <NavOption href="#work">WORK</NavOption>
                    <NavOption href="#contact">CONTACT</NavOption>
                </NavWrapper>
            </Container>
            <ContentTitle>I'm Chris Weng<br/>A Front End Developer</ContentTitle>
        </OutsideContainer>
    )
}

export default Header;

    const OutsideContainer = styled.div`
        background-color: #c8c6a7;

        @media (max-width: 768px){
            width: 100%;
        }

        @media (max-width: 425px){
            width: 100%;
        }

        @media (max-width: 375px){
            width: 100%;
        }

        @media (max-width: 320px){
            width: 100%;
        }
    `;
    
    const Container = styled.header`
        background-color: #c8c6a7;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;

        @media (max-width: 280px){
            padding: 0.5rem 0;
        }
    `;

    const Logo = styled.img`
        width: 50px;
        height: 50px;
        margin: 0.5rem;

        @media (max-width: 280px){
            margin-right: 0;
        }
    `;

    const NavWrapper = styled.div`
        list-style: none;
        display: flex;
    `;

    const NavOption = styled.a`
        margin: 0.5rem;
        cursor: pointer;
        font-weight: 500;
        text-decoration: none;
        color: black;

        @media (max-width: 280px){
            margin: 0.2rem;
        }
    `;

    const ContentTitle = styled.p`
        margin: 3rem 3rem 0 3rem;
        padding: 2rem;
        font-size: 3rem;
        font-weight: 600;
        line-height: 80px;
        text-align: start;

        @media (max-width: 768px){
            font-size: 2rem;
        }

        @media (max-width: 425px){
            font-size: 1.3rem;
            margin: 1rem 1rem 0 1rem;
        }

        @media (max-width: 375px){
            font-size: 1.3rem;
            margin: 1rem 1rem 0 1rem;
        }

        @media (max-width: 320px){
            font-size: 1.3rem;
            margin: 1rem 1rem 0 1rem;
        }

        @media (max-width: 280px){
            font-size: 1.3rem;
            margin: 1rem 1rem 0 1rem;
        }
    `;