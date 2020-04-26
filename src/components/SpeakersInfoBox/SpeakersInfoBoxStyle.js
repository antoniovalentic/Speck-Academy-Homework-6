import styled from 'styled-components';
import img from '../../assets/img/speakers-icon.png';

export const SpeakersInfoBoxComp = styled.div `
    background: #efefef;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const SpeakersInfoBoxHeader= styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
`;

export const SpeakersInfoBoxEventIcon = styled.div `
    flex: 1 0 25px;
    width: 25px;
    height: 25px;
    margin-right: 15px;
    background: url(${img});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const SpeakersInfoBoxTitle = styled.h2 `
    font-size: 18px;
`;

export const SpeakersInfoBoxAbout = styled.p `
    padding: 25px 0;
    font-size: 15px;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    text-align: center;
`;

export const SpeakersInfoBoxFooter = styled.div `
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

export const SpeakersInfoBoxButtonJoin = styled.a `
    font-weight: bold;
    transition: color 0.3s ease-out;

    &:hover {
        color: #58a510;
    }
`;