import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import Hero from '../src/components/Hero/Hero';
import SectionMore from '../src/components/SectionMore/SectionMore';

class App extends Component {
  render(){
    return (
      <>
        <Header />
        <main>
          <Hero />
          <SectionMore />
        </main>
      </>
    );
  }
}

export default App;
