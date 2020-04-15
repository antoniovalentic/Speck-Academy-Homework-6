import React from 'react';
import './SectionMore.css';
import About from '../About/About';
import CardContainer from '../CardContainer/CardContainer';

const SectionMore = () => {
    return (
        <div className="section-more">
            <About></About>
            <CardContainer></CardContainer>
        </div>
    );
}

export default SectionMore;