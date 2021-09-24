import React from 'react'
import SiteWrapper from '../../../site-wrapper/site-wrapper'
import './offer-template.css'
import Sections from '../../../sections/sections'

export default class OfferTemplate extends React.Component {
    
    render() {
        return (
            <SiteWrapper header={this.props.header} img={this.props.img} offer={true} height={370}>
                <Sections siteName={this.props.name} margin={this.props.margin} width={60}>
                    {this.props.children}
                </Sections>
            </SiteWrapper>
        )
    }
}
