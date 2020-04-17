import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import SectionMore from '../components/SectionMore/SectionMore';
import SectionLastYear from '../components/SectionLastYear/SectionLastYear';

const Home = () => {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <SectionMore />
          <SectionLastYear />
        </main>
      </>
    );
}

export default Home;
