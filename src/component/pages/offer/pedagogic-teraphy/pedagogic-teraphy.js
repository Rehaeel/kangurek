import React from 'react'
import './pedagogic-teraphy.css'
import PHCover from './photos/Terapia_pedagogiczna_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import teraphy from './photos/Terapia-pedagogiczna-1.jpg'

export default class PedagogicTeraphy extends React.Component {
    render() {
        return (
            <OfferTemplate header="TERAPIA PEDAGOGICZNA" img={PHCover} name="terapia-pedagogiczna" margin={0}>
                <p><b>Terapia pedagogiczna</b></p>
                <p>Zajęcia z terapii pedagogicznej służą wspomaganiu rozwoju dzieci z różnymi  trudnościami, które wpływają niekorzystnie na proces zdobywania umiejętności szkolnych. Często przyczyny będące podłożem trudności dzieci są trudne do zdiagnozowania lub bardzo złożone, dzieci samodzielnie nie są w stanie poradzić sobie z narastającymi problemami. Braki, które pojawiają się na początku drogi edukacyjnej, narastają, kumulują się, obejmują coraz szersze obszary. W efekcie stają się przyczyną dodatkowych zaburzeń np. emocjonalnych.</p>
                <div>
                    <div>
                        <p>Problemy, które wpiera terapia pedagogiczna dotyczą m.in.:</p>
                        <ul>
                            <li>Opóźnienia i zaburzenia percepcji wzrokowej i słuchowej</li>
                            <li>Deficyt pamięciowy</li>
                            <li>Deficyt uwagi powiązany z nadmierną ruchliwością</li>
                        </ul>
                        <p>Podczas zajęć prowadzimy ćwiczenia z czytania, pisania, liczenia.<br />Robimy to w kreatywny sposób  specjalnymi metodami, które są interesujące dla dziecka i motywują do nauki.</p>
                    </div>
                    <img src={teraphy} alt="terapia pedagogiczna" />
                </div>
            </OfferTemplate>
        )
    }
}
