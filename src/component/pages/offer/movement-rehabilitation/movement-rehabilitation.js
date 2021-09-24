import React from 'react'
import './movement-rehabilitation.css'
import MRCover from './photos/Zajecia_ogolnorozwojowe_zakladka_kangurek.jpg';
import OfferTemplate from '../offer-template/offer-template';

export default class MovementRehabilitation extends React.Component {
    render() {
        return (
            <OfferTemplate header="REHABILITACJA RUCHOWA" img={MRCover} name='rehabilitacja-ruchowa' margin={0}>
                <p><b>Rehabilitacja ruchowa</b></p>
                <p>Głównym celem rehabilitacji ruchowej jest przywrócenie maksymalnie możliwej sprawności fizycznej i komfortu życia dziecka. Ruch jest niezbędnym elementem życia każdego człowieka, buduje masą mięśniową, a zarazem sprawność fizyczną. Opóźnienia w rozwoju motorycznym często sygnalizują opóźnienia w rozwoju poznawczym, emocjonalnym i społecznym. Prawidłowy rozwój motoryczny obejmuje właściwy rozwój lokomocji, postawy oraz manipulacji. Dzieci uwielbiają doznania ruchowe już od momentu narodzin. Dziecko, które ma zapewnioną odpowiednią dawkę ruchu, mają większe predyspozycje do prawidłowego rozwoju umysłowego na miarę swoich  możliwości.</p>
                <p>Zajęcia ruchowe prowadzone w są w małych grupach wiekowych na sali integracji sensorycznej. Celem ich jest wyzwalanie aktywności ruchowej  poprzez zabawy sportowe oparte na naturalnej potrzebie ruchu. Łączą one elementy gimnastyki korekcyjnej, integrację sensoryczną, rytmikę, metodę Weroniki Sherborne.</p>
                <p>Efektem prowadzonych zajęć jest lepsza sprawność fizyczna dzieci, poczucie bezpieczeństwa i lepsze relacje z bliskimi.</p>
                <p><b>Zajęcia  skierowane są  dla dzieci, które mają:</b></p>
                <ul>
                    <li>Problemy z ogólną koordynacją ruchową</li>
                    <li>Trudności z prawidłową dystrybucją napięcia mięśniowego</li>
                    <li>Problemy z ruchami naprzemiennymi</li>
                    <li>Trudności ze schematem ciała</li>
                </ul>

            </OfferTemplate>
        )
    }
}
