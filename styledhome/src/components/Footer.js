import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center; 
    background-color: #eee;
    height: 90px;
    
`
const FooterItem = styled.div`
    text-decoration: none;
    font-size: 16px;
    color: #6899;
    font-weight: bold;

`

export default function footer(){
    return (
      <React.Fragment>
        <Footer>
            <FooterItem>Practicing Styled-Components</FooterItem>
        </Footer>
      </React.Fragment> 
    );
}