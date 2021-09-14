import React from 'react';
import {AboutContainer, LeftContainer, Image, RightContainer, AboutTitle, Description, DescribeContent, UnorderList, WrapList, List} from './Style';
import photo from './image/photo.jpeg';

const About = () => {
    return (
        <AboutContainer id="about">
            <LeftContainer>
                <Image src={photo} alt="Chris Weng"/>
            </LeftContainer>
            <RightContainer>
                <AboutTitle>Hello, I'm Chris</AboutTitle>
                <Description>A front end developer</Description>
                <DescribeContent>I have passion on web development, also love to learn the new skills, and now my goal is trying to write readable and reuseable code in order to easily maintence.</DescribeContent> 
                <DescribeContent>I'm looking forward to join a team to contribute what I learned and share my passion for coding and will continue learn new knowledge.</DescribeContent>
                <AboutTitle>My Skill</AboutTitle>
                <UnorderList>
                    <WrapList>
                        <List>HTML</List>
                        <List>CSS</List>
                        <List>JavaScript</List>
                    </WrapList>
                    <WrapList>
                        <List>React</List>
                        <List>Bootstrap</List>
                        <List>Sass</List>
                    </WrapList>
                    <WrapList>
                        <List>Git</List>
                    </WrapList>
                </UnorderList>
            </RightContainer>
        </AboutContainer>
    )
}

export default About;

