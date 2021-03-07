import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 50px;
    text-align: center;
    background-color: #eee;
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 180px;
    align-items: center;
    display:block;
    horizontal-align: middle;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    h1{
        font-size: 50px;
        text-shadow: 3px 3px;
    }

    span{
        text-shadow: 1px 1px;
        font-size: 20px;
    }
`
export const Items = styled.div `
   margin-top: 0.5%;
   text-align: center;
   align-items: center;
   position: relative;
   font-size: 14px;
   font-weight: bold;
   padding: 20px;
   height: 60px;
   text-decoration: none;
   horizontal-align: middle;


`

export const Item = styled.button`
    border-radius:15px;
    margin: 10px;
    height: 35px;
    color: ${props => props.actived ? 'white' : 'black'};
    background: ${props => props.actived ? '#FF4040' : 'white'};
    text-shadow: 1px 1px 2px #000000;
    box-shadow: 5px 5px #000000;


    &:hover{
    opacity: 0.5;
    background-color: #FF4040;
  }
`

