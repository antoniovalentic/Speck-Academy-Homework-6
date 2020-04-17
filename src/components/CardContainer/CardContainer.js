import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

/* IMAGES */
import About_Img from '../../assets/img/about.jpg';
import Speakers_Img from '../../assets/img/speakers.jpg';
import Agenda_Img from '../../assets/img/calendar.jpg';
import Partenrs_Img from '../../assets/img/partner.jpg';

const CardContainer = () => {
    return (
        <div className="CardsConatiner">
            <Card img_link={About_Img} alt="About" card_title="O tjednu karijera" />
            <Card img_link={Speakers_Img} alt="Speakers" card_title="Izlagači" />
            <Card img_link={Agenda_Img} alt="Agenda" card_title="Raspored događanja" />
            <Card img_link={Partenrs_Img} alt="Partenrs" card_title="Partneri" />
        </div>
    );
}

export default CardContainer;