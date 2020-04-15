import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './SectionLastYear.css';

const SectionLastYear = () => {
    return (
        <section class="section-last-year">
            <div class="section-last-year__inner">
                <h2>FOI tjedan karijera 2019</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical
                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                    a
                    Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source.</p>
                <figure>
                    <img src="./images/last-year.jpg" alt="FOI careers 2019" />
                </figure>
            </div>
        </section>
    );
}

export default SectionLastYear;