import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="section-hero__data-container">
                <h1 className="section-hero__title">Tjedan karijera</h1>
                <span className="section-hero__organizer">FOI</span>
                <p className="section-hero__date">20.10.2020. - 26.10.2020.</p>
                <LINK to="/" className="btn">Prijavi se</LINK>
            </div>
        </section>
    );
}

export default Hero;