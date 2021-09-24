import React from 'react'
import './kynoteraphy.css'
import KTCover from './photos/Dogoterapia_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import kyno from './photos/Dogoterapia.jpg'

export default class Kynoteraphy extends React.Component {
    render() {
        return (
            <OfferTemplate header="KYNOTERAPIA (DOGOTERAPIA)" img={KTCover} name="kynoterapia" margin={0}>
                <div>
                    <p><b>Kynoterapia (dogoterapia),</b></p>
                    <p>jest to metoda, wspierająca wszechstronny rozwój dziecka przy wykorzystaniu specjalnie szkolonego psa.</p>
                    <p>Poprzez np.: głaskanie, karmienie, naśladowanie zachowań zwierzaka, prowadzenie go na smyczy, wydawanie komend i wspólnej zabawy osiągamy zamierzone, terapeutyczne cele takie jak:</p>
                    <ul>
                        <li>empatię do zwierząt, opiekuńczość, odpowiedzialność</li>
                        <li>wyciszenie zachowań agresywnych</li>
                        <li>poprawę koncentracji uwagi dziecka</li>
                        <li>rozładowanie napięcia emocjonalnego, panowanie nad emocjami</li>
                        <li>eliminowanie lęków</li>
                        <li>uczenie odpowiedzialności, akceptacji.</li>
                        <li>usprawnianie motoryki dużej i małej</li>
                        <li>stymulację wszystkich zmysłów</li>
                        <li>zmniejszają nadwrażliwość na bodźce dotykowe</li>
                        <li>zwiększenie poczucia bezpieczeństwa</li>
                        <li>wyzwalają potrzebę spontanicznej komunikacji, ułatwiają nawiązywanie kontaktu z innymi</li>
                    </ul>
                </div>
                <div>
                    <img src={kyno} alt="kynoterapia (dogoterapia)" />
                    <p>Zajęcia obejmują trzy formy pracy z psem:</p>
                    <ol>
                        <li>spotkanie z psem</li>
                        <li>edukacja z psem</li>
                        <li>terapia z psem</li>
                    </ol>
                </div>
            </OfferTemplate>
        )
    }
}
