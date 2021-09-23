import React from 'react'
import SiteWrapper from '../../../site-wrapper/site-wrapper'
import './si.css'
import SI from './photos/Integracja_Sensoryczna_zakladka_kangurek.jpg'

export default class Si extends React.Component {
    render() {
        return (
            <SiteWrapper header="INTEGRACJA SENSORYCZNA (SI)" img={SI} offer={true} height={370}>

            </SiteWrapper>
        )
    }
}
