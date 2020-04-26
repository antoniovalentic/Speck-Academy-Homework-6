import styled from 'styled-components';

export const SectionEventsComp = styled.div `
    display: block;
    max-width: 350px;
    margin: 0 auto;
    padding: 0 15px;

    @media only screen and (min-width: 576px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        max-width: 1024px;
    }

    @media only screen and (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (min-width: 1024px){
        gap: 30px;
        padding: 0;
    }
`;

export const SectionEventsInfoBox = styled.div `
    margin-bottom: 40px;

    @media only screen and (min-width: 576px){
        margin: inherit;
    }
`;