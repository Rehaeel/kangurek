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

import tel from '../../icons/tel.svg';
import map from '../../icons/map.svg';
import mail from '../../icons/mail.svg';


export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <img src={homePagePoster} alt="" className="home-page-poster" />

                <h3 className="home-page-cytat">„Czego nie ma najpierw w zmysłach, tego nie ma później w umyśle”<br />
                    ~B. Pascal</h3>

                <Sections width={70} name="O nas">
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
                        <div className="facebook-cta" id={'aktualnosci'} >
                            <h1>znajdź nas na Facebooku!</h1>
                        </div>
                    </a>
                </Sections>

                <Sections width={70} name="Oferta">
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

                <Sections width={70} name="Kontakt">
                    <div className="contact">
                        <div className="contact-info">
                            <h3>Dane kontaktowe</h3>

                            <p>tel.: <a href="tel:+48505776121">505-665-121</a> i <a href="tel:+48600216870">600-216-870</a></p>
                            <a href="tel:+48505776121"><img src={tel} alt="" /></a>

                            <p>Mail: <a href="mailto:info@centrum-kangurek.pl">info @centrum-kangurek.pl</a></p>
                            <a href="mailto:info@centrum-kangurek.pl"><img src={mail} img alt="" /></a>

                            <p><a href="https://www.google.pl/maps/place/Centrum+Kangurek/@53.1317883,18.0174391,15z/data=!4m8!1m2!2m1!1scentrum+kangurek!3m4!1s0x470313e4298cd6bd:0x26e0e0577a21e6d9!8m2!3d53.139576!4d18.0299779">
                                ul.Czerkaska 11 lok.2A (piętro),<br />
                                85-637 Bydgoszcz
                            </a></p>
                            <a href="https://www.google.pl/maps/place/Centrum+Kangurek/@53.1317883,18.0174391,15z/data=!4m8!1m2!2m1!1scentrum+kangurek!3m4!1s0x470313e4298cd6bd:0x26e0e0577a21e6d9!8m2!3d53.139576!4d18.0299779">
                                <img src={map} alt="" />
                            </a>


                        </div>
                        <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.3631980881983!2d18.0299779!3d53.139576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313e4298cd6bd%3A0x26e0e0577a21e6d9!2sCentrum+Kangurek!5e0!3m2!1spl!2spl!4v1504606219610" width="100%" height="400" frameborder="0" allowfullscreen>

                        </iframe>
                    </div>
                </Sections >
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