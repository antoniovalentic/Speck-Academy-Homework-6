import styled from 'styled-components';
import img from '../../assets/img/event-icon.png';

export const EventsInfoBoxComp = styled.div `
    background: #efefef;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const EventsInfoBoxHeader= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
`;

export const EventsInfoBoxEventIcon = styled.div `
    flex: 1 0 25px;
    width: 25px;
    height: 25px;
    margin-right: 15px;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const EventsInfoBoxTitle = styled.h2 `
    font-size: 18px;
`;

export const EventsInfoBoxSubheader = styled.div `
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
`;

export const EventsInfoBoxSubheaderBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EventsInfoBoxSubheaderFigure = styled.figure `
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
`;

export const EventsInfoBoxSubheaderImg = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const EventsInfoBoxAbout = styled.p `
    padding: 25px 0;
    font-size: 15px;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    text-align: center;
`;

export const EventsInfoBoxFooter = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

export const EventsInfoBoxButtonJoin = styled.a `
    font-weight: bold;
    transition: color 0.3s ease-out;

    &:hover {
        color: #58a510;
    }
`;