import React from 'react';
import { SpeakersInfoBoxComp, SpeakersInfoBoxHeader, SpeakersInfoBoxEventIcon, SpeakersInfoBoxTitle, SpeakersInfoBoxSubheader, SpeakersInfoBoxSubheaderBox, SpeakersInfoBoxSubheaderFigure, SpeakersInfoBoxSubheaderImg, SpeakersInfoBoxAbout, SpeakersInfoBoxFooter, SpeakersInfoBoxButtonJoin } from './SpeakersInfoBoxStyle';

const SpeakersInfoBox = (props) => {
    return (
        <>
            <SpeakersInfoBoxComp>
                <SpeakersInfoBoxHeader>
                    <SpeakersInfoBoxEventIcon></SpeakersInfoBoxEventIcon>
                    <SpeakersInfoBoxTitle>{props.title}</SpeakersInfoBoxTitle>
                </SpeakersInfoBoxHeader>
                <SpeakersInfoBoxAbout>{props.about}</SpeakersInfoBoxAbout>
                <SpeakersInfoBoxFooter>
                    <SpeakersInfoBoxButtonJoin href="#">Prati sudionika</SpeakersInfoBoxButtonJoin>
                </SpeakersInfoBoxFooter>
            </SpeakersInfoBoxComp>
        </>
    );
}

export default SpeakersInfoBox;