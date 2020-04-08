import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Card.css';

const Card = () => {
    return (
        <>
            <Link to="/" className="card">
                <figure>
                    <img src="./images/about.jpg" alt="About" />
                </figure>
                <p className="card__title">O tjednu karijera</p>
            </Link>
        </>
    );
}

export default Card;