import React from 'react';
import './SectionEvents.css';
import EventsInfoBox from '../EventsInfoBox/EventsInfoBox';

const SectionEvents = () => {
    return (
      <div className="SectionEvents">
        <EventsInfoBox />
        <EventsInfoBox />
        <EventsInfoBox />
        <EventsInfoBox />
        <EventsInfoBox />
        <EventsInfoBox />
        <EventsInfoBox />
        <EventsInfoBox />
      </div>
    );
}

export default SectionEvents;