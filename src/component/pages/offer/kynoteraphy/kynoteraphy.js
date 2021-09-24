import React from 'react'
import './kynoteraphy.css'
import KTCover from './photos/Dogoterapia_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class Kynoteraphy extends React.Component {
    render() {
        return (
            <OfferTemplate header="KYNOTERAPIA (DOGOTERAPIA)" img={KTCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
