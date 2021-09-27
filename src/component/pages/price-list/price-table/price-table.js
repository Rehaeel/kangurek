import React from 'react'
import { tariff } from './pricing-tariff';
import './price-table.css'

export default function PriceTable() {
    return (
        <table className="cennik">
            <tr>
                <td>Usługa</td>
                <td>Czas trwania zajęć</td>
                <td>Cena brutto</td>
            </tr>
            <PriceRow />
        </table>
    )
}

function PriceRow() {
    return (
        <>
            {tariff.map((head, index) => {
                return (
                    <>
                        <tr key={index}><th colspan="3">{head.header}</th></tr>
                        {head.body.map((service, index) => {
                            return (
                                <tr key={index}>
                                    <td key={index}>{service.serviceName}</td>
                                    <td key={index}>{service.duration}</td>
                                    <td key={index}>{service.cost}</td>
                                </tr>
                            )
                        })}
                    </>
                )
            })}
        </>
    )
}
