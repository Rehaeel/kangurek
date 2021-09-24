import React from 'react'
import './creativity.css'
import cCover from './photos/Kreatywnosc_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class Creativity extends React.Component {
    render() {
        return (
            <OfferTemplate header="KREATYWNOŚĆ" img={cCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
