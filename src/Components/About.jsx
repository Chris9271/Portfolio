import React from 'react';
import styled from 'styled-components';
import photo from './image/photo.jpeg';

const About = () => {
    return (
        <Container id="about">
            <LeftContainer>
                <Image src={photo} alt="Chris Weng"/>
            </LeftContainer>
            <RightContainer>
                <h2>Hello, I'm Chris</h2>
                <span>A front end developer</span>
                <br/>
                <br/>
                <AboutContent>
                    <p>I have passion on web development, also love to learn the new skills, and now my goal is trying to write readable and reuseable code in order to easily maintence.</p> 
                    <p>I'm looking forward to join a team to contribute what I learned and share my passion for coding and will continue learn new knowledge.</p>
                <br/>
                <h2>My Skill</h2>
                <UnorderList>
                    <List>
                        <li>HTML & CSS</li>
                        <li>JavaScript</li>
                    </List>
                    <List>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </List>
                    <li>Git</li>
                </UnorderList>
                </AboutContent>
            </RightContainer>
        </Container>
    )
}

export default About;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 3rem;

    @media (max-width: 768px){
        margin: 0rem;
    }

    @media (max-width: 425px){
        display: block;
        margin: 1.3rem;
    }

    @media (max-width: 375px){
        display: block;
        margin: 1.3rem;
    }

    @media (max-width: 320px){
        display: block;
        margin: 1.3rem;
    }
`;

const LeftContainer = styled.div`
    width: 50%;
    text-align: center;
    padding-top: 3rem;

    @media (max-width: 425px){
        width: 100%;
        padding: 1.5rem 0;
    }

    @media (max-width: 375px){
        width: 100%;
        padding: 1.5rem 0;
    }

    @media (max-width: 320px){
        width: 100%;
        padding: 1.5rem 0;
    }
`;

const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;

    @media (max-width: 425px){
        width: 220px;
        height: 220px;
    }

    @media (max-width: 375px){
        width: 220px;
        height: 220px;
    }

    @media (max-width: 320px){
        width: 220px;
        height: 220px;
    }
`;

const RightContainer = styled.div`
    width: 50%;
    padding: 2rem 1.5rem;

    @media (max-width: 425px){
        width: 100%;
        padding: 0;
    }

    @media (max-width: 375px){
        width: 100%;
        padding: 0;
    }

    @media (max-width: 320px){
        width: 100%;
        padding: 0;
    }
`;

const UnorderList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;

    @media (max-width: 280px){
        padding-left: 10px;
    }
`;

const List = styled.span`
    display: block;
`;

const AboutContent = styled.span`
    line-height: 30px;
`;