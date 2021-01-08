import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer'
import Landing from './pages/Landing';
import Register from './pages/Register'

import {GlobalStyles} from './styles/GlobalStyles';

function App() {
  return (

    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/register" component={Register} />
      </Switch>

      <Footer />
      <GlobalStyles />
    </ BrowserRouter>
  );
};

export default App;
