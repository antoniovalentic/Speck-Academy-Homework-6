import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './CardContainer.css';

const CardContainer = () => {
    return (
        <div className="cards-conatiner">
            <Link to="/" className="card">
                <figure>
                    <img src="./images/about.jpg" alt="About" />
                </figure>
                <p className="card__title">O tjednu karijera</p>
            </Link>
            <Link to="/" className="card">
                <figure>
                    <img src="./images/speakers.jpg" alt="Speakers" />
                </figure>
                <p className="card__title">Izlagači</p>
            </Link>
            <Link to="/" className="card">
                <figure>
                    <img src="./images/calendar.jpg" alt="Agenda" />
                </figure>
                <p className="card__title">Raspored događanja</p>
            </Link>
            <Link to="/" className="card">
                <figure>
                    <img src="./images/partner.jpg" alt="Partenrs" />
                </figure>
                <p className="card__title">Partneri</p>
            </Link>
        </div>
    );
}

export default CardContainer;