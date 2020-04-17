import React from 'react';
import './Card.scss';

const Card = (props) => {
    return (
        <>
            <a href="/#" className="Card">
                <figure>
                    <img src={props.img_link} alt={props.alt} />
                </figure>
                <p className="Card-Title">{props.card_title}</p>
            </a>
        </>
    );
}

export default Card;