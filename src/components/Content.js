import React, {useState} from 'react';
import styled from 'styled-components';
import Cards from './Cards'
import cardImages from '../utils/cardImages';

const Container = styled.main`
    display: flex;
    width: 700px;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 500px;
    margin 0 auto;
    box-sizing: border-box;
`
// const ContentItem = styled.p`
//     color: #6899;
//     text-align: left;
//     width: 250px;
//     font-weight: bold;
//     box-sizing: border-box;
//     margin: 40px;
//     padding: 10px;
// `


export default function Content(){
    const [cards] = useState({'Skills': cardImages.skillImg,'Academic Experience': cardImages.academicImg,'Professional Experience': cardImages.professionalImg, 'Artistic Experience':cardImages.artisticImg})



    return (
        <React.Fragment>
            <Container>
                {Object.keys(cards).map((key,index) =>(
                <Cards title={key} image={cards[key]}/> 
                ))}
            </Container>
        </React.Fragment>
    );
}