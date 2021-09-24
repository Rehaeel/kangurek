import React from 'react'
import './SI.css'
import SiCover from './photos/Integracja_Sensoryczna_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import si from './photos/SI.jpg'

export default class SI extends React.Component {
    render() {
        return (
            <OfferTemplate header="INTEGRACJA SENSORYCZNA (SI)" img={SiCover} name="si" margin={0} >
                <p><b>Integracja sensoryczna  (SI)</b></p>
                <p>Zakłócenia na poziomie organizacji i odbioru wrażeń zmysłowych mogą skutkować nieadekwatnym zachowaniem dziecka, trudnościami w uczeniu się, a także powodować zaburzenia funkcji ruchowych.</p>
                <p>Interweniujemy terapeutycznie  wtedy, gdy luka między tym, czego by się oczekiwało od dziecka na danym etapie wiekowym w zakresie SI a tym, co ono prezentuje jest na tyle duża, że dziecku nie udaje się go wyrównać w trakcie zabaw i innych czynności naturalnych.</p>
                <div>
                    <div>
                        <p>Integracja sensoryczna  skierowana jest do dzieci, które mają:</p>
                        <ul>
                            <li>nadwrażliwość na bodźce (np. zatykanie uszu, nie lubią mycia włosów, obcinania paznokci)</li>
                            <li>problemy z jazdą na rowerze, hulajnodze</li>
                            <li>trudności z koordynacją ruchową np. słabo wycinają , rysują, nie łapią i nie kopią piłki</li>
                            <li>nieprawidłowo chwytają kredkę, długopis</li>
                            <li>kłopoty ze skupieniem uwagi</li>
                            <li>mają opóźniony rozwój mowy</li>
                            <li>potykają się, wpadają na ludzi, przedmioty</li>
                            <li>są nadmiernie aktywne ruchowo (ciągle biegają, skaczą, kręcą się, huśtają).</li>
                        </ul>
                    </div>
                    <img src={si} alt="integracja sensoryczna" />
                </div>
                <p>Dla dzieci do lat 3 opracowaliśmy specjalny program <a href="/klub-klub-kangurka">KLUB KANGURKA</a> wspierający rozwój procesu integracji sensorycznej.</p>
                <p>Przeprowadzamy  diagnozę oceny rozwoju procesów integracji sensorycznej dziecka, które obejmują:</p>
                <ul>
                    <li>wywiad z rodzicami</li>
                    <li>wypełnienie przez rodziców Kwestionariusza Sensomotorycznego</li>
                    <li>obserwację kliniczną dziecka</li>
                    <li>przeprowadzanie Południowo Kalifornijskich Testów dla dzieci od 4 r.ż.</li>
                    <li>obserwację zachowania dziecka podczas badania</li>
                    <li>obserwację swobodnej zabawy dziecka i jego reakcji na stymulację sensoryczną.</li>
                </ul>
                <p>Terapia  trwa 45 minut</p>
            </OfferTemplate>
        )
    }
}
