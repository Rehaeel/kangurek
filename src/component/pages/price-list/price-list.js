import React from 'react';
import './price-list.css'
import SiteWrapper from '../../site-wrapper/site-wrapper';
import Cover from './photos/Cennik_zakladka_kangurek.jpg';
import Cennik from './photos/Cennik.jpg';
import CTAbutton from '../../button/CTA-button/CTA-button';

export default class PriceList extends React.Component {
    render() {
        return (
            <SiteWrapper header="cennik" img={Cover}>
                <img src={Cennik} alt='cennik usług' />
                <CTAbutton href="/kontakt">Zadzwoń i umów się na wizytę!</CTAbutton>
            </SiteWrapper>
        )
    }
}
