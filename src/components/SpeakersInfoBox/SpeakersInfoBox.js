import React from 'react';
import './SpeakersInfoBox.scss';

const SpeakersInfoBox = (props) => {
    return (
        <>
            <div class="InfoBox">
                <div class="InfoBox-Header">
                    <div class="InfoBox-Icon InfoBox-Icon_typeSpeaker"></div>
                    <h2 class="InfoBox-Title">{props.name}</h2>
                </div>
                <p class="InfoBox-About">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one.</p>
                <div class="InfoBox-Footer">
                    <a href="/#" class="InfoBox-ButtonJoin">Prati sudionika</a>
                </div>
            </div>
        </>
    );
}

export default SpeakersInfoBox;