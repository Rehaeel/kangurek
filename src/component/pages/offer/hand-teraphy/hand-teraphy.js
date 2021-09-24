import React from 'react'
import './hand-teraphy.css'
import HTCover from './photos/Terapia_reki_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class HandTeraphy extends React.Component {
    render() {
        return (
            <OfferTemplate header="TERAPIA RĘKI" img={HTCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
