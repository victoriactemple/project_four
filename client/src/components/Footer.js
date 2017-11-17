import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
 font-family: 'Oxygen', sans-serif; 
background-color: rgba(237, 234, 231, 100);
text-align: center;
min-height: 70px;

`

const Footer = () => {
    return (
        <FooterContainer>
            <h4>2017</h4>
        </FooterContainer>
    )
};

export default Footer;