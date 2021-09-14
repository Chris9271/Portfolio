import React from 'react';
import { FooterContainer, CopyRight } from './Style';

const Footer = () => {
    return (
        <FooterContainer>
            <CopyRight>&copy;
                {' '}
                Chris Weng
                {' '}
                {new Date().getFullYear()}
                {' '}
                All rights reserved.
            </CopyRight>
        </FooterContainer>
    )
}

export default Footer;
