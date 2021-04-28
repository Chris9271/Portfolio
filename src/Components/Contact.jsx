import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Container id="contact">
            <h2>Contact Me</h2>
            <ConnectBox>
                <Connect href="https://www.linkedin.com/in/chris-weng/">
                    <img src="https://img.icons8.com/fluent/36/000000/linkedin.png" alt="linkedin-icon"/>
                </Connect>
                <Connect href="https://github.com/Chris9271">
                    <img src="https://img.icons8.com/fluent-systems-filled/36/000000/github.png" alt="github-icon"/>
                </Connect>
                <Connect href="mailto:chrisweng18@gmail.com">
                    <img src="https://img.icons8.com/material-outlined/36/000000/mail.png" alt="mail-icon"/>
                </Connect>
            </  ConnectBox>
        </Container>
    )
}

export default Contact;

const Container = styled.div`
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

    const ConnectBox = styled.div`
        display: flex;
        justify-content: center;
    `;

    const Connect = styled.a`
        text-align: center;
        cursor: pointer;
        margin: 0.5rem;
    `;
