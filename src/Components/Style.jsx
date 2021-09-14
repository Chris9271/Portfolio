import styled from 'styled-components';

// ---*** Header Component's Style Start ***---
const HeaderContainer = styled.div`
    background-color: #c8c6a7;
`;
    
const HeadWrapper = styled.header`
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
`;

const NavWrapper = styled.div`
    list-style: none;
    display: flex;
    align-items: center;
`;

const NavOption = styled.a`
    margin: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    color: black;
    font-size: 1.6rem;
`;

const HeadTitle = styled.p`
    margin: 3rem 3rem 0 3rem;
    padding: 2rem;
    font-size: 3rem;
    font-weight: 600;
    line-height: 8rem;
    text-align: start;

    @media (max-width: 768px){
        font-size: 2rem;
    }

    @media (max-width: 425px){
        margin: 1rem 1rem 0 1rem;
    }
`;
// ---*** Header Component's Style End ***---


// ---*** About Component's Style Start ***---
const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        display: block;
    }

    @media (max-width: 425px){
        padding: 1.3rem;
    }
`;

const LeftContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px){
        width: 100%;
        padding: 1.5rem 0 1rem 0;
    }

    @media (max-width: 425px){
        padding: 1.5rem 0;
    }
`;

const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;

    @media (max-width: 768px){
        width: 220px;
        height: 220px;
    }
`;

const RightContainer = styled.div`
    width: 50%;
    padding: 3rem;

    @media (max-width: 768px){
        width: 90%;
    }

    @media (max-width: 425px){
        width: 100%;
        padding: 0;
    }
`;

const AboutTitle = styled.h2`
    font-size: 2.4rem;
    margin: 1rem 1.5rem 1.5rem 0;
`;

const Description = styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
`;

const DescribeContent = styled.div`
    font-size: 1.6rem;
    line-height: 3rem;
    margin-bottom: 1rem;
`;

const UnorderList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;

    @media (max-width: 280px){
        padding-left: 10px;
    }
`;

const WrapList = styled.span`
    display: block;
    line-height: 30px;
`;

const List = styled.li`
    font-size: 1.6rem;
`;
// ---*** About Component's Style End ***---


// ---*** Work Component's Style Start ***---
const WorkContainer = styled.div`
    background-color: #f8f5f1;
    padding: 0.5rem 0;
`;

const Project = styled.div`
    display: flex;

    @media (max-width: 980px){
        display: flex;
        text-align: center;
    }

    @media (max-width: 768px){
        display: block;
        text-align: center;
        padding: 1.5rem;
    }

    @media (max-width: 425px){
        padding: 1rem 1rem 2rem 1rem;
    }
`;

const ImageWrapper = styled.div`
    width: 50%;
    max-height: 450px;

    @media (max-width: 1024px){
        width: 50%;
    }

    @media (max-width: 980px){
        width: 50%;
    }

    @media (max-width: 758px){
        width: 100%;
        max-height: 100%;
    }

    @media (max-width: 425px){
        width: 100%;
        max-height: 100%;
    }
`;

const PrjOne = styled.img`
    -webkit-width: 100%;
    width: 100%;
    height: 100%;

    @media (max-width: 768px){
        width: 90vw;
    }

    @media (max-width: 425px){
        width: 100%;
    }
`;

const Content = styled.div`
    width: 50%;
    padding: 5rem 5rem 0 5rem;
    font-size: 1.6rem;

    @media (max-width: 830px){
        padding: 3rem 5rem 0 5rem;
    }

    @media (max-width: 768px){
        width: 100%;
        padding: 1.5rem;
    }

    @media (max-width: 568px){
        padding: 0;
    }

    @media (max-width: 425px){
        width: 100%;
        font-size: 0.9rem;
    }

    @media (max-width: 280px){
        font-size: 0.7rem;
    }
`;

const WrapContent = styled.div`
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;

    @media (max-width: 830px){
        padding: 0;
    }

    @media (max-width: 425px){
        padding: 1rem;
    }
`;

const ContentTitle = styled.h2`
    font-size: 2.4rem;
    margin: 1rem 1.5rem 1rem 0rem;
`;

const Context = styled.p`
    font-size: 1.6rem;
    line-height: 30px;
    padding-bottom: 2rem;

    @media (max-width: 980px){
        font-size: 1.6rem;
    }

    @media (max-width: 425px){
        font-size: 1.2rem;
        padding-bottom: 1.5rem;
    }
`;

const Skill = styled.span`
    width: 20px;
    height: 10px;
    background-color: #393e46;
    color: white;
    margin: 0 0.5rem;
    padding: 0.8rem;
    border-radius: 5px;
    font-size: 1.6rem;

    @media (max-width: 540px){
        margin: 0 0.3rem;
    }

    @media (max-width: 425px){
        margin: 0 0.5rem;
    }

    @media (max-width: 320px){
        padding: 0.3rem;
        margin: 0 0.2rem;
    }

    @media (max-width: 280px){
        font-size: 1.5rem;
    }
`;

const ProjectReverse = styled.div`
    display: flex;

    @media (max-width: 980px){
        display: flex;
        text-align: center;
    }

    @media (max-width: 768px){
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        padding: 1rem 1rem 2rem 1rem;
    }

    @media (max-width: 425px){
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        padding: 1rem 1rem 2rem 1rem;
    }
`;

const PrjTwo = styled.img`
    width: 100%;
    height: 100%;

    @media (max-width: 768px){
        width: 80vw;
        margin: 0;
    }

    @media (max-width: 425px){
        width: 100%;
        margin: 0;
    }
`;
// ---*** Work Component's Style End ***---


// ---*** Contact Component's Style Start ***---
const ContactContainer = styled.div`
    text-align: center;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
        

    @media (max-width: 768px){
        height: 30%;
    }
`;

const ContactTitle = styled.h2`
    font-size: 2rem;
    margin: 1rem;
`;

const ConnectBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const Connect = styled.a`
    text-align: center;
    cursor: pointer;
    margin: 0.5rem;
`;
// ---*** Contact Component's Style End ***---

// ---*** Footer Component's Style Start ***---
const FooterContainer = styled.footer`
    background-color: #c8c6a7;
    padding: 1.5rem 1rem;
`;

const CopyRight = styled.p`
    text-align: center;
    font-family: noto-serif;
    font-size: 1.5rem;
`;
// ---*** Footer Component's Style End ***---

export {
    HeaderContainer, HeadWrapper, Logo, NavWrapper, NavOption, HeadTitle,
    AboutContainer, LeftContainer, Image, RightContainer, AboutTitle, Description, DescribeContent, UnorderList, WrapList, List,
    WorkContainer, Project, PrjOne, Content, WrapContent, ContentTitle, Context, Skill, ProjectReverse, PrjTwo, ImageWrapper,
    ContactContainer, ContactTitle, ConnectBox, Connect,
    FooterContainer, CopyRight
};
