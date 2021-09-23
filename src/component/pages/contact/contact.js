import React from 'react'
import SiteWrapper from '../../site-wrapper/site-wrapper'
import './contact.css'
import Kontakt from './photos/Kontakt_kangurek.jpg';
import Sections from '../../sections/sections';

import tel from '../../icons/tel.svg';
import map from '../../icons/map.svg';
import mail from '../../icons/mail.svg';

import bank from './photos/Konto-bankowe.jpg';

export default class Contact extends React.Component {
    render() {
        return (
            <SiteWrapper header='Kontakt' img={Kontakt} height={300}>
                <ContactComponent />
                <div className="bank-bearings">
                    <img src={bank} alt="numer konta bankowego" />
                    <p><strong>Konto bankowe </strong><strong>Kangurka:</strong> 11 1090 1072 0000 0001 3749 9362</p>
                </div >
            </SiteWrapper >
        )
    }
}


export class ContactComponent extends React.Component {
    render() {
        return (
            <Sections width={this.props.width ?? 70} name="Kontakt">
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
        )
    }
}