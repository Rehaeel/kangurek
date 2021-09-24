import React from 'react'
import './STW.css'
import STWCover from './photos/Sensomotoryczna_terapia_widzenia_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class STW extends React.Component {
    render() {
        return (
            <OfferTemplate header="SENSOMOTORYCZNA TERAPIA WIDZENIA (STW)" img={STWCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
