import React from 'react'
import './hand-teraphy.css'
import HTCover from './photos/Terapia_reki_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import hand from './photos/Terapia_reki.jpg'
import ReactGA from 'react-ga';

export default class HandTeraphy extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <OfferTemplate header="TERAPIA RĘKI" img={HTCover} name="terapia-reki" margin={0}>
                <div>
                    <div>
                        <p><b>Terapia ręki</b></p>
                        <p>Przeznaczona jest dla dzieci, które:</p>
                        <ul>
                            <li>nie lubią rysować</li>
                            <li>nieprawidłowo trzymają długopis</li>
                            <li>mają kłopoty z cięciem, lepieniem, wiązaniem sznurowadeł, zapinaniem guzików</li>
                            <li>niedokładnie rysują szlaczki, piszą literki</li>
                        </ul>
                    </div>
                    <img src={hand} alt="terapia ręki" />
                </div>
                <div>
                    <div>
                        <p>Zajęcia terapii ręki łączą  w sobie  integrację sensoryczną,  elementy zajęć ogólnorozwojowych, terapię widzenia,  kreatywność, zabawy paluszkowe, ćwiczenia  z zakresu samoobsługi.</p>
                        <p>Kontrola nad ciałem rozwija się stopniowo, poczynając od głowy przechodząc w kierunku stóp, potem  osiągamy stabilizację centralną, aż  do sprawnego posługiwania się dłonią.</p>
                    </div>
                    <div>
                        <p>Terapia  ręki  obejmuje ćwiczenia całego ciała:</p>
                        <ul>
                            <li>prawidłowej postawy</li>
                            <li>wzmacnianie napięcia mięśniowego</li>
                            <li>poprawę zachowania równowagi</li>
                            <li>doskonalenie czucia powierzchniowego</li>
                            <li>poprawę percepcji wzrokowej</li>
                            <li>usprawnianie koordynacji wzrokowo-ruchowej</li>
                        </ul>
                    </div>
                </div>
            </OfferTemplate>
        )
    }
}
