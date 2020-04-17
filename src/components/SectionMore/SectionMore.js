import React from 'react';
import './SectionMore.scss';
import About from '../About/About';
import CardContainer from '../CardContainer/CardContainer';

const SectionMore = () => {
    return (
        <div className="SectionMore">
            <About />
            <CardContainer />
        </div>
    );
}

export default SectionMore;