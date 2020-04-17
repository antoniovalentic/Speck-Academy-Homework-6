import React from 'react';
import './SectionSpeakers.scss';
import SpeakersInfoBox from '../SpeakersInfoBox/SpeakersInfoBox';

const SectionEvents = () => {
    return (
      <div className="SectionSpeakers">
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