import React from 'react';
import './price-list.css'
import SiteWrapper from '../../site-wrapper/site-wrapper';
import Cover from './photos/Cennik_zakladka_kangurek.jpg';
import CTAbutton from '../../button/CTA-button/CTA-button';
import ReactGA from 'react-ga';
import PriceTable from './price-table/price-table';

export default class PriceList extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <SiteWrapper header="cennik" img={Cover}>
                <PriceTable />
                <CTAbutton href="/kontakt">Zadzwoń i umów się na wizytę!</CTAbutton>
            </SiteWrapper>
        )
    }
}
