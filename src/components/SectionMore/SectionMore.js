import React from 'react';
import { SectionMoreComp } from './SectionMoreStyle';
import About from '../About/About';
import CardContainer from '../CardContainer/CardContainer';

const SectionMore = () => {
    return (
        <SectionMoreComp>
            <About />
            <CardContainer />
        </SectionMoreComp>
    );
}

export default SectionMore;