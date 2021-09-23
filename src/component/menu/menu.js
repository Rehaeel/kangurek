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
                    <ul className="menu-tabs">
                        <a href="/#aktualnosci" alt=""><li>Aktualności</li ></a>
                        <li style={{ cursor: 'pointer' }}><a href="/#oferta" alt="">Oferta</a>
                            <div style={{ display: 'block' }}>
                                <ul className="menu-oferta">
                                    <NavLink activeClassName="menu-selected" to="/integracja-sensoryczna"><li>Integracja Sensoryczna</li></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/klub-kangurka"><li>Klub Kangurka</li></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/sensomotoryczna-terapia-widzenia"><li>Sensomotoryczna Terapia Widzenia</li></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/rechabilitacja-ruchowa"><li>Rechabilitacja ruchowa</li></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/terapia-pedagogiczna"><li>Terapia pedagogiczna</li ></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/terapia-logopedyczna"><li>Terapia logopedyczna</li ></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/terapia-reki"><li>Terapia ręki</li ></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/kreatywnosc"><li>Kreatywność</li ></NavLink>
                                    <NavLink activeClassName="menu-selected" to="/kynoterapia"><li>Kynoterapia (dogoterapia)</li ></NavLink>
                                </ul>
                            </div>
                        </li>
                        <NavLink activeClassName="menu-selected" to="/terapeuci"><li>Terapeuci</li ></NavLink>
                        <NavLink activeClassName="menu-selected" to="/galeria"><li>Galeria</li ></NavLink>
                        <NavLink activeClassName="menu-selected" to="/warto-wiedziec"><li>Warto wiedzieć</li ></NavLink>
                        <NavLink activeClassName="menu-selected" to="/cennik"><li>Cennik</li ></NavLink>
                        <NavLink activeClassName="menu-selected" to="/szkolenia"><li>Szkolenia</li ></NavLink>
                        <NavLink activeClassName="menu-selected" to="/kontakt"><li>Kontakt</li ></NavLink>
                    </ul>
                </div>
            </div >
        )
    }
}
