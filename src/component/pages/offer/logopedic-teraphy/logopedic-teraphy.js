import React from 'react'
import './logopedic-teraphy.css'
import LTCover from './photos/Terapia_logopedyczna_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';
import teraphy from './photos/Terapia_logopedyczna.jpg'
import ReactGA from 'react-ga';

export default class LogopedicTeraphy extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <OfferTemplate header="TERAPIA LOGOPEDYCZNA" img={LTCover} name="terapia-logopedyczna" margin={0}>
                <div>
                    <p><b>Terapia logopedyczna:</b></p>
                    <p>Wczesna diagnoza problemów logopedycznych pozwala w porę dostrzec trudności dziecka i szybciej oraz skuteczniej je zniwelować zanim dziecko rozpocznie naukę w szkole.</p>
                    <ul>
                        <li>kształtuje prawidłową mowę , dba o jej prawidłowy i jak najlepszy rozwój pod względem fonetycznym, gramatycznym i leksykalnym</li>
                        <li>doskonali mowę już ukształtowaną</li>
                        <li>usuwa wady mowy</li>
                        <li>naucza mowy (mówienia i rozumienia) w wypadku jej braku lub utraty</li>
                        <li>usuwa zaburzenia głosu</li>
                        <li>usuwanie trudności w czytaniu i pisaniu</li>
                    </ul>
                </div>
                <img src={teraphy} alt="terapia logopedyczna" />
            </OfferTemplate>
        )
    }
}
