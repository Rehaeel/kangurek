import React from 'react'
import './SI.css'
import SiCover from './photos/Integracja_Sensoryczna_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class SI extends React.Component {
    render() {
        return (
            <OfferTemplate header="INTEGRACJA SENSORYCZNA (SI)" img={SiCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
