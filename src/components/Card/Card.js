import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    return (
        <>
            <Link to="/" className="card">
                <figure>
                    <img src={props.img_link} alt={props.alt} />
                </figure>
                <p className="card__title">{props.card_title}</p>
            </Link>
        </>
    );
}

export default Card;