import React from 'react';
import './SectionSpeakers.css';
import SpeakersInfoBox from '../SpeakersInfoBox/SpeakersInfoBox';

const SectionEvents = () => {
    return (
      <div className="SectionEvents">
        <SpeakersInfoBox name="Johan Bach" />
        <SpeakersInfoBox name="Sebastian Bach" />
        <SpeakersInfoBox name="Johan Franck" />
        <SpeakersInfoBox name="Johan Speck" />
        <SpeakersInfoBox name="Joe Boe" />
        <SpeakersInfoBox name="El Bow" />
      </div>
    );
}

export default SectionEvents;