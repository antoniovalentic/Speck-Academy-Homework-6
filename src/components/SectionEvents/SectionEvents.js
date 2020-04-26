import React from 'react';
import { SectionEventsComp } from './SectionEventsStyle';

const SectionEvents = (props) => {
    return (
      <SectionEventsComp>
        {props.children}
      </SectionEventsComp>
    );
}

export default SectionEvents;