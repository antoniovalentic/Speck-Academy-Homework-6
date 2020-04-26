import React from 'react';
import { SectionSpeakersComp } from './SectionSpeakersStyle';

const SectionEvents = (props) => {
    return (
      <SectionSpeakersComp>
        {props.children}
      </SectionSpeakersComp>
    );
}

export default SectionEvents;