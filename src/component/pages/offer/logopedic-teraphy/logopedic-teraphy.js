import React from 'react'
import './logopedic-teraphy.css'
import LTCover from './photos/Terapia_logopedyczna_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class LogopedicTeraphy extends React.Component {
    render() {
        return (
            <OfferTemplate header="TERAPIA LOGOPEDYCZNA" img={LTCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
