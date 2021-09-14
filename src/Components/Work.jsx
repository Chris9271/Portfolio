import React from 'react';
import weather from './image/weatherforecast.png';
import ecommerce from './image/ecommerce.png';
import blog from './image/blog.png';
// import blog1 from './image/blog1.png';
import {WorkContainer, Project, PrjOne, Content, WrapContent, ContentTitle, Context, Skill, ProjectReverse, PrjTwo, ImageWrapper} from './Style';
import '../App.css';

const Work = () => {
    return (
        <WorkContainer>
            {/* <WorkBox> */}
                <Project>
                    <ImageWrapper>
                        <PrjOne src={ecommerce}/>
                    </ImageWrapper>
                    <Content>
                        <WrapContent>
                            <ContentTitle>Shopping Site</ContentTitle>
                            <Context>Learn React and Redux to bulid fictional website for ecommerce, with user login, cart management, google integration and stripe payment.</Context>
                            <Skill>React.js</Skill>
                            <Skill>Firebase</Skill>
                            <Skill>Redux</Skill>
                            <Skill>Stripe</Skill>
                        </WrapContent>
                    </Content>
                </Project>
                <ProjectReverse>
                    <Content>
                        <WrapContent>
                            <ContentTitle>Weather Forecast</ContentTitle>
                            <Context>This application can check weather base on your city location, also temperature throughout next 24 hours, and 7 days weather in the future depends on user's input.</Context>
                            <Skill>React.js</Skill>
                            <Skill>Chart.js</Skill>
                            <Skill>Hooks</Skill>
                        </WrapContent>
                    </Content>
                    <ImageWrapper>
                        <PrjTwo src={weather}/>
                    </ImageWrapper>
                </ProjectReverse>
                <Project>
                    <ImageWrapper>
                        <PrjOne src={blog}/>
                    </ImageWrapper>
                    <Content>
                        <WrapContent>
                            <ContentTitle>Blog</ContentTitle>
                            <Context>User can share photo with some notes on this website, and also add, edit or delete post after they login or signup.</Context>
                            <Skill>React.js</Skill>
                            <Skill>Redux</Skill>
                            <Skill>Node.js</Skill>
                            <Skill>MongoDB</Skill>
                        </WrapContent>
                    </Content>
                </Project>
            {/* </WorkBox> */}
        </WorkContainer>
    )
}

export default Work;
