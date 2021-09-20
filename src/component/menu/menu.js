import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import home from '../icons/home.png'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="menu-container">
                    <NavLink to="/">
                        <img src={home} alt="strona domowa" className="menu-home" />
                    </NavLink>
                    <div className="menu-tabs">
                        <NavLink to="/#aktualnosci">Aktualnosci</NavLink>
                        <NavLink to="/integracja-sensoryczna">Integracja Sensoryczna</NavLink>
                        <NavLink to="/klub-kangurka">Klub Kangurka</NavLink>
                        <NavLink to="/sensomotoryczna-terapia-widzenia">Sensomotoryczna Terapia Widzenia</NavLink>
                        <NavLink to="/rechabilitacja-ruchowa">Rechabilitacja ruchowa</NavLink>
                        <NavLink to="/terapia-pedagogiczna">Terapia pedagogiczna</NavLink>
                        <NavLink to="/terapia-logopedyczna">Terapia logopedyczna</NavLink>
                        <NavLink to="/terapia-reki">Terapia ręki</NavLink>
                        <NavLink to="/kreatywnosc">Kreatywność</NavLink>
                        <NavLink to="/kynoterapia">Kynoterapia (dogoterapia)</NavLink>
                        <NavLink to="/terapeuci">Terapeuci</NavLink>
                        <NavLink to="/galeria">Galeria</NavLink>
                        <NavLink to="/warto-wiedziec">Warto wiedzieć</NavLink>
                        <NavLink to="/cennik">Cennik</NavLink>
                        <NavLink to="/szkolenia">Szkolenia</NavLink>
                        <NavLink to="/kontakt">Kontakt</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
