import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
    background-color: #eee;
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
`
const Item = styled.div `
   font-size: 14px;
   font-family: 'Read';
   font-weight: bold;
   padding: 20px;
   color: #6899;
`
export default function header(){
    return (
        <Header>
            <Item>Home</Item>
            <Item>Contact</Item>
            <Item>About</Item>
        </Header>
    );
}