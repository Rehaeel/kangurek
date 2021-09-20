import React from 'react';
import './App.css';
import { Route } from 'react-router';
import HomePage from './component/pages/home-page/home-page';
import Menu from './component/menu/menu';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Menu />
        <Route exact path="/">
          <HomePage />
        </Route>
      </div>
    );
  }
}