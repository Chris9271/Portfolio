import React from 'react';
import {ContactContainer, ContactTitle, ConnectBox, Connect} from './Style';

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactTitle>Contact Me</ContactTitle>
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
            </ ConnectBox>
        </ContactContainer>
    )
}

export default Contact;
