import React from 'react';

import {Card,Button} from 'react-bootstrap';
import styles from './styles.module.css'


export default function Cards({title, image}){
    return(
        <div className={styles.container}>
            <Card className={styles.cards}>
            <Card.Img className={styles.cardImage} variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className={styles.cardButton} variant="secondary">Go somewhere</Button>
            </Card.Body>
        </Card> 
        </div>



    );
}
