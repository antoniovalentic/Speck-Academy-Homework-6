import React, { Component, createContext, useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

/* COMPONENTS */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

/* PAGES */
import Home from './pages/Home';
import Events from './pages/Events';
import Speakers from './pages/Speakers';
import Register from './pages/Register';
import Login from './pages/Login';

/* Context */
/*
const AuthContext = createContext();
const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('token') !== null){
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={isLoggedIn}>
      {props.children}
    </AuthContext.Provider>
  );
}
*/

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token') !== null){
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Header isAuth={isLoggedIn} />
      <Main>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/events" component={Events} />
        <PrivateRoute path="/speakers" component={Speakers} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Main>
    </>
  );
}

export default App;
