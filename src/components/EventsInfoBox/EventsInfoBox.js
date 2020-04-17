import React from 'react';
import Location from '../../assets/img/location-icon.png';
import Time from '../../assets/img/time-icon.png';
import './EventsInfoBox.scss';

const EventsInfoBox = () => {
    return (
        <>
            <div class="InfoBox">
                <div class="InfoBox-Header">
                    <div class="InfoBox-Icon InfoBox-Icon_typeEvent"></div>
                    <h2 class="InfoBox-Title">How can we benefit from React Redux</h2>
                </div>
                <div class="InfoBox-Subheader">
                    <div class="InfoBox-SubheaderBox">
                        <figure class="InfoBox-SubheaderFigure">
                            <img class="InfoBox-SubheaderImg" src={Location} alt="Location icon" />
                        </figure>
                        <span class="InfoBox-SubheaderBoxText">Dvorana D09</span>
                    </div>
                    <div class="InfoBox-SubheaderBox">
                        <figure class="InfoBox-SubheaderFigure">
                            <img class="InfoBox-SubheaderImg" src={Time} alt="Time icon" />
                        </figure>
                        <span class="InfoBox-SubheaderBoxText">24.3. u 13:45h</span>
                    </div>
                </div>
                <p class="InfoBox-About">Latin literature from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one.</p>
                <div class="InfoBox-Footer">
                    <a href="/#" class="InfoBox-ButtonJoin">Prijavi se na predavanje</a>
                </div>
            </div>
        </>
    );
}

export default EventsInfoBox;