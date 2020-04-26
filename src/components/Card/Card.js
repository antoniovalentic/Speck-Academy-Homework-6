import React from 'react';
import { CardComp, CardFigure, CardFigureImg, CardTitle } from './CardStyle';

const Card = (props) => {
    return (
        <CardComp href="/#">
            <CardFigure>
                <CardFigureImg src={props.img_link} alt={props.alt} />
            </CardFigure>
            <CardTitle>{props.card_title}</CardTitle>
        </CardComp>
    );
}

export default Card;