import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import HomePage from "./component/pages/home/home-page";
import Menu from "./component/menu/menu";
import Terapieuci from "./component/pages/terapists/terapeuci-page";
import Footer from "./component/footer/footer";
import GalleryPage from "./component/pages/gallery/gallery-page";
import GoodToKnow from "./component/pages/good-to-know/good-to-know";
import PriceList from "./component/pages/price-list/price-list";
import Contact from "./component/pages/contact/contact";
import MovementRehabilitation from "./component/pages/offer/movement-rehabilitation/movement-rehabilitation";
import PedagogicTeraphy from "./component/pages/offer/pedagogic-teraphy/pedagogic-teraphy";
import LogopedicTeraphy from "./component/pages/offer/logopedic-teraphy/logopedic-teraphy";
import HandTeraphy from "./component/pages/offer/hand-teraphy/hand-teraphy";
import Creativity from "./component/pages/offer/creativity/creativity";
import Kynoteraphy from "./component/pages/offer/kynoteraphy/kynoteraphy";
import KangurooClub from "./component/pages/offer/kangoroo-club/kangoroo-club";
import IntegracjaSensoryczna from "./component/pages/offer/integracja-sensoryczna/integracja-sensoryczna";
import SensomotorycznaTerapiaWidzenia from "./component/pages/offer/sensomotoryczna-terapia-widzenia/sensomotoryczna-terapia-widzenia";
import ScrollToTop from "./component/scroll-to-top";

export default class App extends React.Component {
    

    render() {
        return (
            <div className="App">
                <Menu />
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        {PageList.map((page, index) => {
                            return (
                                <Route path={page.path} key={index}>
                                    {page.child}
                                </Route>
                            );
                        })}
                    </Switch>
                </ScrollToTop>

                <Footer />
            </div>
        );
    }
}

const PageList = [
    {
        path: "/terapeuci",
        child: <Terapieuci />,
    },
    {
        path: "/klub-kangurka",
        child: <KangurooClub />,
    },
    {
        path: "/galeria",
        child: <GalleryPage />,
    },
    {
        path: "/warto-wiedziec",
        child: <GoodToKnow />,
    },
    {
        path: "/cennik",
        child: <PriceList />,
    },
    {
        path: "/kontakt",
        child: <Contact />,
    },
    {
        path: "/integracja-sensoryczna",
        child: <IntegracjaSensoryczna />,
    },
    {
        path: "/sensomotoryczna-terapia-widzenia",
        child: <SensomotorycznaTerapiaWidzenia />,
    },
    {
        path: "/rehabilitacja-ruchowa",
        child: <MovementRehabilitation />,
    },
    {
        path: "/terapia-pedagogiczna",
        child: <PedagogicTeraphy />,
    },
    {
        path: "/terapia-logopedyczna",
        child: <LogopedicTeraphy />,
    },
    {
        path: "/terapia-reki",
        child: <HandTeraphy />,
    },
    {
        path: "/kreatywnosc",
        child: <Creativity />,
    },
    {
        path: "/kynoterapia-dogoterapia",
        child: <Kynoteraphy />,
    },
];
