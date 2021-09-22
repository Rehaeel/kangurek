import React from 'react';
import './App.css';
import { Route } from 'react-router';
import HomePage from './component/pages/home-page/home-page';
import Menu from './component/menu/menu';
import Terapieuci from './component/pages/terapeuci/terapeuci-page';
import Footer from './component/footer/footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Menu />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/terapeuci">
          <Terapieuci />
        </Route>
        <Footer />
      </div>
    );
  }
}