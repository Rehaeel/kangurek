import React from 'react'
import SiteWrapper from '../../../site-wrapper/site-wrapper'
import './offer-template.css'

export default class OfferTemplate extends React.Component {
    render() {
        return (
            <SiteWrapper header={this.props.header} img={this.props.img} offer={true} height={370}>
                {this.props.children}
            </SiteWrapper>
        )
    }
}
