import React,{useState} from 'react';
import {Container, Items, Item} from './styles.js';

export default function Header(){

    const [itemActived, setItemActived] = useState('home');

    // const handleClick = (item) => {
    //     setItemActived(item);
    //     // redirect in here;
    // }

    return (
        <Container>
            <div>
                <h1>PORTFOLIO</h1>
                <span>Fullstack Developer</span>
                </div>
            <Items>
                <Item onClick={() => {setItemActived('home')}}  actived={itemActived==='home'}>Home</Item>
                <Item onClick={() => {setItemActived('info')}}  actived={itemActived==='info'}>Personal Info</Item>
                <Item onClick={() => {setItemActived('contact')}}  actived={itemActived==='contact'}>Contact</Item>
                <Item onClick={() => {setItemActived('resume')}}  actived={itemActived==='resume'}>Resume</Item> 
            </Items>
         
        </Container>
    );
}