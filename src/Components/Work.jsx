import React from 'react';
import weather from './image/weatherforecast.png';
import ecommerce from './image/ecommerce.png';
import styled from 'styled-components';

const Work = () => {
    return (
        <Container id="work">
            <Box>
            <Project>
                <PrjOne src={weather}/>
                <Content>
                    <h2>Weather Forecast</h2>
                    <Context>This application can check weather base on your city location, also temperature throughout next 24 hours, and 7 days weather in the future depends on user's input.</Context>
                    <Skill>React.js</Skill>
                    <Skill>Chart.js</Skill>
                    <Skill>Hooks</Skill>
                </Content>
            </Project>
            <Project>
                <PrjTwo src={ecommerce}/>
                <Content>
                    <h2>Shopping Site</h2>
                    <Context>Using React and Redux to make shopping site with user signup/ login and google login authentication.</Context>
                    <Skill>React.js</Skill>
                    <Skill>Firebase</Skill>
                    <Skill>Redux</Skill>
                </Content>
            </Project>
            </Box>
        </Container>
    )
}

export default Work;

    const Container = styled.div`
        background-color: #f8f5f1;
    `;

    const Box = styled.div`
        margin: 0 3rem;

        @media (max-width: 768px){
            margin: 0;
        }

        @media (max-width: 425px){
            margin: 0;
        }

        @media (max-width: 375px){
            margin: 0;
        }

        @media (max-width: 320px){
            margin: 0;
        }
    `;

    const Project = styled.div`
        padding: 1rem;
        display: flex;
        justify-content: space-between;

        @media (max-width: 425px){
            display: block;
            padding: 1rem 1rem 2rem 1rem;
        }

        @media (max-width: 375px){
            display: block;
            padding: 1rem 1rem 2rem 1rem;
        }

        @media (max-width: 320px){
            display: block;
            padding: 1rem 1rem 2rem 1rem;
        }
    `;

    const PrjOne = styled.img`
        width: 50%;
        margin-right: 1rem;

        @media (max-width: 425px){
            margin: 0;
        }

        @media (max-width: 425px){
            width: 100%;
            margin: 0;
        }

        @media (max-width: 375px){
            width: 100%;
            margin: 0;
        }

        @media (max-width: 320px){
            width: 100%;
            margin: 0;
        }
    `;

    const Content = styled.div`
        padding: 8rem;
        width: 50%;

        @media (max-width: 1024px){
            padding: 3rem;
        }

        @media (max-width: 768px){
            padding: 1.5rem;
        }

        @media (max-width: 568px){
            padding: 0;
        }

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

    const Context = styled.p`
        font-size: 1.1rem;
        line-height: 30px;
        padding-bottom: 2rem;

        @media (max-width: 540px){
            padding-bottom: 0.2rem;
        }

        @media (max-width: 425px){
            padding-bottom: 1rem;
        }

        @media (max-width: 375px){
            padding-bottom: 1rem;
        }

        @media (max-width: 320px){
            padding-bottom: 1rem;
        }
    `;

    const Skill = styled.span`
        width: 20px;
        height: 10px;
        background-color: #393e46;
        color: white;
        margin: 0 0.5rem;
        padding: 0.5rem;
        border-radius: 5px;

        @media (max-width: 540px){
            margin: 0 0.3rem;
        }

        @media (max-width: 425px){
            margin: 0 0.5rem;
        }

        @media (max-width: 280px){
            margin: 0 0.1rem;
        }
    `;

    const PrjTwo = styled.img`
        width: 50%;
        margin-right: 1rem;

        @media (max-width: 425px){
            width: 100%;
            margin: 0;
        }

        @media (max-width: 375px){
            width: 100%;
            margin: 0;
        }

        @media (max-width: 320px){
            width: 100%;
            margin: 0;
        }
    `;