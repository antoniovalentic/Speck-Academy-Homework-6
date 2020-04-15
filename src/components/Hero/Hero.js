import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="section-hero">
            <div className="section-hero_data-container">
                <h1 className="section-hero_title">Tjedan karijera</h1>
                <span className="section-hero_organizer">FOI</span>
                <p className="section-hero_date">20.10.2020. - 26.10.2020.</p>
                <Link to="/" className="btn">Prijavi se</Link>
            </div>
        </section>
    );
}

export default Hero;