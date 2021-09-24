import React from 'react'
import './creativity.css'
import cCover from './photos/Kreatywnosc_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import creativity from './photos/Kreatywnosc.jpg'

export default class Creativity extends React.Component {
    render() {
        return (
            <OfferTemplate header="KREATYWNOŚĆ" img={cCover} name="kreatywnosc" margin={0}>
                <div>
                    <p><b>Kreatywność</b></p>
                    <p>Prowadzimy zajęcia grupowe z kreatywności, które mają na celu:</p>
                    <ul>
                        <li>rozwijanie twórczości dzieci</li>
                        <li>wspieranie wyobraźni</li>
                        <li>rozwijanie zainteresowań</li>
                        <li>poprawę motoryki małej i dużej</li>
                        <li>normalizację zmysłów dotyku, słuchu, wzroku</li>
                    </ul>
                    <p>Nasze zajęcia łączą   muzykoterapię, metodę Sensoplastyki, Klanzę, Pedagogikę Zabawy, Metodę Dobrego Startu oraz wszystkie techniki plastyczne: malarskie, rysunku, modelowania, kolażu, batiku, decoupage.</p>
                </div>
                <img src={creativity} alt="kreatywność" />
            </OfferTemplate>
        )
    }
}
