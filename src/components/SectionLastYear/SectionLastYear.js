import React from 'react';
import Img from '../../assets/img/last-year.jpg';
import { SectionLastYearComp, SectionLastYearInner, SectionLastYearTitle, SectionLastYearParagraph, SectionLastYearFigure, SectionLastYearFigureImage } from './SectionLastYearStyle';

const SectionLastYear = () => {
    return (
        <SectionLastYearComp>
            <SectionLastYearInner>
                <SectionLastYearTitle>FOI tjedan karijera 2019</SectionLastYearTitle>
                <SectionLastYearParagraph>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.
                </SectionLastYearParagraph>
                <SectionLastYearFigure>
                    <SectionLastYearFigureImage src={Img} alt="FOI careers 2019" />
                </SectionLastYearFigure>
            </SectionLastYearInner>
        </SectionLastYearComp>
    );
}

export default SectionLastYear;