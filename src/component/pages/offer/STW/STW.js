import React from 'react'
import './STW.css'
import STWCover from './photos/Sensomotoryczna_terapia_widzenia_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import stw from './photos/STW_chlopiec.jpg'
import ReactGA from 'react-ga';

export default class STW extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <OfferTemplate header="SENSOMOTORYCZNA TERAPIA WIDZENIA (STW)" img={STWCover} name="stw" margin={0}>
                <p><b>Sensomotoryczna  terapia widzenia (STW)</b></p>
                <p>STW  to program   łączący statyczną  i dynamiczną terapię funkcji wzrokowych. Wykorzystuje integrację bodźców wzrokowych, słuchowych i ruchowych.</p>
                <p>Ćwiczenia wzrokowe są wykonywane zarówno w  pozycjach statycznych jak i w ruchu, angażując do pracy układ przedsionkowy i proprioceptywny. Dzięki temu następuje właściwa integracja bodźców wzrokowych  z pozostałymi zmysłami. Metodę Sensomotorycznej terapii widzenia można stosować podczas klasycznych zajęć integracji sensorycznej,  terapii pedagogicznej lub jako niezależną formę terapii. Na zajęciach wykorzystuje się stymulatory, które pozwalają na lepszą integrację wzrokowo- słuchową. Taka umiejętność stanowi podstawę uczenia się.</p>
                <div>
                    <div>
                        <p>STW skierowana się do dzieci, u których występują:</p>
                        <ul>
                            <li>trudności szkolne: kłopoty z opanowaniem umiejętności czytania, pisania, umiejętności matematycznych, obniżony poziom rozumienia, obniżona pamięć wzrokowa  i słuchowa oraz motoryczna</li>
                            <li>obniżona koordynacja wzrokowo- ruchowa</li>
                            <li>zaburzenia koncentracji uwagi</li>
                            <li>zaburzenia integracji sensorycznej</li>
                            <li>dysleksja</li>
                        </ul>
                    </div>
                    <img src={stw} alt="sensomotoryczna terapia widzenia (STW)" />
                </div>


            </OfferTemplate>
        )
    }
}
