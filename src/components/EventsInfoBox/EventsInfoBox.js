import React from 'react';
import Location from '../../assets/img/location-icon.png';
import Time from '../../assets/img/time-icon.png';
import { EventsInfoBoxComp, EventsInfoBoxHeader, EventsInfoBoxEventIcon, EventsInfoBoxTitle, EventsInfoBoxSubheader, EventsInfoBoxSubheaderBox, EventsInfoBoxSubheaderFigure, EventsInfoBoxSubheaderImg, EventsInfoBoxAbout, EventsInfoBoxFooter, EventsInfoBoxButtonJoin } from './EventsInfoBoxStyle';

const EventsInfoBox = (props) => {
    return (
        <>
            <EventsInfoBoxComp>
                <EventsInfoBoxHeader>
                    <EventsInfoBoxEventIcon></EventsInfoBoxEventIcon>
                    <EventsInfoBoxTitle>{props.title}</EventsInfoBoxTitle>
                </EventsInfoBoxHeader>
                <EventsInfoBoxSubheader>
                    <EventsInfoBoxSubheaderBox>
                        <EventsInfoBoxSubheaderFigure>
                            <EventsInfoBoxSubheaderImg src={Location} alt="Location icon" />
                        </EventsInfoBoxSubheaderFigure>
                        <span class="InfoBox-SubheaderBoxText">{props.location}</span>
                    </EventsInfoBoxSubheaderBox>
                    <EventsInfoBoxSubheaderBox>
                        <EventsInfoBoxSubheaderFigure>
                            <EventsInfoBoxSubheaderImg src={Time} alt="Time icon" />
                        </EventsInfoBoxSubheaderFigure>
                        <span class="InfoBox-SubheaderBoxText">{props.dateTime}</span>
                    </EventsInfoBoxSubheaderBox>
                </EventsInfoBoxSubheader>
                <EventsInfoBoxAbout>{props.about}</EventsInfoBoxAbout>
                <EventsInfoBoxFooter>
                    <EventsInfoBoxButtonJoin href="/#">Prijavi se na predavanje</EventsInfoBoxButtonJoin>
                </EventsInfoBoxFooter>
            </EventsInfoBoxComp>
        </>
    );
}

export default EventsInfoBox;