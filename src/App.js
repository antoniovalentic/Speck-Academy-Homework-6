import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

/* COMPONENTS */
import Header from './components/Header/Header';
import Main from './components/Main/Main';

/* PAGES */
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';

/* Context */
const AuthContext

class App extends Component {
  render(){
    return (
      <>
        <Header />
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/events" component={Events} />
          <Route path="/speakers" component={Speakers} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Main>
      </>
    );
  } 
}

export default App;
