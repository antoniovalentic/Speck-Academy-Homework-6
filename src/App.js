import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

/* COMPONENTS */
import Header from './components/Header/Header';
import Main from './components/Main/Main';

/* PAGES */
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';

class App extends Component {
  render(){
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" Component={Home} />
          <Route path="/events" Component={Events} />
          <Route path="/speakers" Component={Speakers} />
        </Main>
      </>
    );
  }
}

export default App;
