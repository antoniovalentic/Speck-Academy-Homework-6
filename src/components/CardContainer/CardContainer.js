import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = () => {
    return (
        <div className="cards-conatiner">
            <Card img_link="../../assets/img/about.jpg" alt="About" card_title="O tjednu karijera" />
            <Card link="./images/speakers.jpg" alt="Speakers" card_title="Izlagači" />
            <Card link="./images/calendar.jpg" alt="About" card_title="Raspored događanja" />
            <Card link="./images/partner.jpg" alt="Partenrs" card_title="Partneri" />
        </div>
    );
}

export default CardContainer;