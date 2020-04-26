import React from 'react';
import Hero from '../components/Hero/Hero';
import SectionMore from '../components/SectionMore/SectionMore';
import SectionLastYear from '../components/SectionLastYear/SectionLastYear';
import Progress from 'rsup-progress';

const Home = () => {
    const progress = new Progress();
    // progress.start();
    return (
      <>
        <Hero />
        <SectionMore />
        <SectionLastYear />
      </>
    );
}

export default Home;
