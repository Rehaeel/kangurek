import React from 'react'
import './pedagogic-teraphy.css'
import PHCover from './photos/Terapia_pedagogiczna_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class PedagogicTeraphy extends React.Component {
    render() {
        return (
            <OfferTemplate header="TERAPIA PEDAGOGICZNA" img={PHCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
