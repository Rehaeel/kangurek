import React from 'react';
import './home-page.css';
import homePagePoster from './photos/Centrum-Terapii-i-Rozwoju-Dziecka-Kangurek.jpg';
import maleLapki from './photos/male_lapki.jpg';
import { Link } from 'react-router-dom';
import Sections from '../../sections/sections';

import SI from './photos/offer/Kafelek_integracja_sensoryczna.jpg';
import Kreatywnosc from './photos/offer/Kreatywnosc.jpg';
import Kynoterapia from './photos/offer/Kynoterapia.jpg';
import Logopedia from './photos/offer/Logopedia.jpg';
import RR from './photos/offer/Rehabilitacja-Ruchowa.jpg';
import STW from './photos/offer/Sensomotoryczna-Terapia-Widzenia.jpg';
import TP from './photos/offer/Terapia-Pedagogiczna.jpg';
import TR from './photos/offer/Terapia-Reki.jpg';
import { ContactComponent } from '../contact/contact';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <img src={homePagePoster} alt="" className="home-page-poster" />

                <h3 className="home-page-cytat">„Czego nie ma najpierw w zmysłach, tego nie ma później w umyśle”<br />
                    ~B. Pascal</h3>

                <Sections name="O nas">
                    <p>W CENTRUM TERAPII I ROZWOJU DZIECKA KANGUREK  łączymy  naukę z  zabawą,
                        pomagając w ten sposób dzieciom, które przeżywają   trudności rozwojowe, edukacyjne,
                        związane z  integracją zmysłów, z koordynacją wzrokowo-ruchową.</p>
                    <div className="home-about-us">
                        <p style={{ textAlign: 'left' }}><b>Naszą ofertę kierujemy do dzieci:</b><br />
                            – z zaburzeniami integracji sensorycznej<br />
                            – z zaburzeniami mowy, słuchu, wzroku<br />
                            – z problemami szkolnymi (koncentracją, czytaniem, pisaniem, liczeniem)<br />
                            – z zaburzoną koordynacją ruchową<br />
                            – z nadpobudliwością psychoruchową<br />
                            Bazując na naszym sporym doświadczeniu w pracy z dziećmi  prowadzimy również szkolenia i warsztaty dla nauczycieli i rodziców.<br />
                            Ponadto organizujemy kursy dla matek z małymi dziećmi.<br />
                            Cechuje nas miłe, sympatyczne usposobienie, chęć niesienia pomocy, rzetelność i profesjonalizm<br />
                            Zapraszamy
                        </p>
                        <img src={maleLapki} alt="" style={{ justifySelf: 'center' }} />
                    </div>
                </Sections>

                <Sections width={100} name="Aktualności">
                    <a href="https://www.facebook.com/centrumkangurek/" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                        <div className="facebook-cta">
                            <h1>znajdź nas na Facebooku!</h1>
                        </div>
                    </a>
                </Sections>

                <Sections name="Oferta">
                    <div className="oferta-box">
                        <Offert link='/integracja-sensoryczna' image={SI}>
                            Na zajęciach <b>SI</b> poprzez specjalnie dobrane ćwiczenia wpływamy
                            na właściwy odbiór wrażeń sensorycznych, które warunkują
                            prawidłowy przebieg procesu Integracji Sensorycznej.
                        </Offert>

                        <Offert link='/sensomotoryczna-terapia-widzenia' image={STW}>
                            Na zajęciach <b>STW</b> ćwiczymy funkcje wzrokowe podczas ruchu
                            i w statyce, następuje właściwa integracja
                            bodźców wzrokowych z pozostałymi zmysłami.
                        </Offert>

                        <Offert link='/rehabilitacja-ruchowa' image={RR}>
                            <b>Rehabilitacja ruchowa</b> rozwija prawidłową postawę dzieci
                            wymagających gimnastyki korekcyjnej, wspiera rozwój ruchowy
                            i sprawność fizyczną dzieci z różnymi dysfunkacjami.
                        </Offert>

                        <Offert link='terapia-pedagogiczna' image={TP}>
                            Na zajęciach <b>terapii pedagogicznej</b> pomagamy
                            przezwyciężać trudności szkolne związane z czytaniem,
                            pisaniem i liczeniem poprzez specjalne metody.
                        </Offert>

                        <Offert link='/logopeda' image={Logopedia}>
                            Na <b>logopedii</b> usuwamy wady wymowy. Wprowadzamy także
                            komunikację wspomagającą i alternatywną (AAC),
                            która uczy porozumiewania się dzieci niemówiących.
                        </Offert>

                        <Offert link='/terapia-reki' image={TR}>
                            <b>Terapia ręki</b> to zajęcia prowadzone specjalnymi metodami
                            w celu poprawy pisania, usprawniania ruchów
                            precyzyjnych, dostarczanie wrażeń czuciowych.
                        </Offert>

                        <Offert link='/kreatywnosc' image={Kreatywnosc}>
                            Na zajęciach <b>kreatywności</b> rozwijamy wyobraźnię,
                            twórcze myślenie, zainteresowanie sztuką.
                        </Offert>

                        <Offert link='/kynoterapia' image={Kynoterapia}>
                            Podczas zajęć <b>kynoterapii</b> ze specjalnie szkolonymi psami
                            dzieci wyciszają się, poprawiają koncentrację uwagi
                            i wszechstronnie rozwijają się.
                        </Offert>
                    </div>
                </Sections>

                <ContactComponent />
            </div >
        )
    }
}

class Offert extends React.Component {
    render() {
        return (
            <Link to={this.props.link} style={{ textDecoration: 'none', color: '#333' }}>
                <div className="offer">
                    <img src={this.props.image} alt="" />
                    <div className="overlay">
                        <p>
                            {this.props.children}
                        </p>
                    </div>
                </div>
            </Link>
        )
    }
}