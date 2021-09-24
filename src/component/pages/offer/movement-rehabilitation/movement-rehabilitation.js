import React from 'react'
import './movement-rehabilitation.css'
import MRCover from './photos/Zajecia_ogolnorozwojowe_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class MovementRehabilitation extends React.Component {
    render() {
        return (
            <OfferTemplate header="REHABILITACJA RUCHOWA" img={MRCover}>
                <h1>coś</h1>
            </OfferTemplate>
        )
    }
}
