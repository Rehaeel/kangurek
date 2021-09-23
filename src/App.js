import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import HomePage from './component/pages/home/home-page';
import Menu from './component/menu/menu';
import Terapieuci from './component/pages/terapists/terapeuci-page';
import Footer from './component/footer/footer';
import GalleryPage from './component/pages/gallery/gallery-page';
import GoodToKnow from './component/pages/good-to-know/good-to-know';
import PriceList from './component/pages/price-list/price-list';
import Contact from './component/pages/contact/contact';
import Workshops from './component/pages/workshops/workshops';
import Si from './component/pages/offer/SI/si';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Menu />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/terapeuci">
            <Terapieuci />
          </Route>

          <Route path="/galeria">
            <GalleryPage />
          </Route>

          <Route path="/warto-wiedziec">
            <GoodToKnow />
          </Route>

          <Route path="/cennik">
            <PriceList />
          </Route>

          <Route path="/kontakt">
            <Contact />
          </Route>

          <Route path="/szkolenia">
            <Workshops />
          </Route>

          <Route path="/integracja-sensoryczna">
            <Si />
          </Route>

        </Switch>

        <Footer />
      </div>
    );
  }
}