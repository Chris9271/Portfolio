import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <CopyRight>&copy;
                {' '}
                Chris Weng
                {' '}
                {new Date().getFullYear()}
                {' '}
                All rights reserved.
            </CopyRight>
        </Container>
    )
}

export default Footer;

const Container = styled.footer`
    background-color: #f8f5f1;
    padding: 1.5rem 1rem;
`;

const CopyRight = styled.p`
    text-align: center;
    font-family: noto-serif;
`;
