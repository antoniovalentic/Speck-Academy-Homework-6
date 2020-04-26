import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHero, SectionHeroDataContainer, SectionHeroTitle, SectionHeroOrganizer, SectionHeroDate, SectionHeroDataContainerBtn } from './HeroStyle';

const Hero = () => {
    return (
        <SectionHero>
            <SectionHeroDataContainer>
                <SectionHeroTitle>Tjedan karijera</SectionHeroTitle>
                <SectionHeroOrganizer>FOI</SectionHeroOrganizer>
                <SectionHeroDate>20.10.2020. - 26.10.2020.</SectionHeroDate>
                <SectionHeroDataContainerBtn href="#">Prijavi se</SectionHeroDataContainerBtn>
            </SectionHeroDataContainer>
        </SectionHero>
    );
}

export default Hero;