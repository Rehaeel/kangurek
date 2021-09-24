import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';
import home from '../icons/home.png'

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            menuOfertaOpen: false,
            burgerMenuOpen: false
        }
    }

    toggleBurgerMenu = () => {
        this.setState({ burgerMenuOpen: !this.state.burgerMenuOpen })
    }

    closeBurgerMenu = () => {
        this.setState({ burgerMenuOpen: false })
    }

    menuOfertaOpener = () => {
        this.setState({ menuOfertaOpen: true })
    }

    menuOfertaCloser = () => {
        this.setState({ menuOfertaOpen: false })
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-container">
                    <NavLink to="/" onClick={this.closeBurgerMenu} >
                        <img src={home} alt="strona domowa" className="menu-home" />
                    </NavLink>
                    <p
                        className="menu-button"
                        style={{ display: this.state.burgerMenuOpen ? 'block' : 'none' }}
                        onClick={this.toggleBurgerMenu}>
                        {this.state.burgerMenuOpen ? 'X' : '☰'}
                    </p>
                    <div className={`menu-tabs ${this.state.burgerMenuOpen ? 'otwarte-menu' : ''}`}>
                        <a onClick={this.closeBurgerMenu} href="/#aktualnosci" alt=""><p>Aktualności</p></a>
                        <a onClick={this.closeBurgerMenu} href="/#oferta" alt="">
                            <p
                                onMouseEnter={this.menuOfertaOpener}
                                onMouseLeave={this.menuOfertaCloser}
                                onClick={this.closeBurgerMenu} >
                                Oferta
                            </p>
                        </a>
                        <div
                            style={{ cursor: 'pointer', display: 'block' }}
                            className={`menu-oferta ${this.state.menuOfertaOpen ? 'oferta-opened' : ''}`}
                            onMouseEnter={this.menuOfertaOpener}
                            onMouseLeave={this.menuOfertaCloser}>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/integracja-sensoryczna"><p >Integracja Sensoryczna</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/klub-kangurka"><p >Klub Kangurka</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/sensomotoryczna-terapia-widzenia"><p >Sensomotoryczna Terapia Widzenia</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/rehabilitacja-ruchowa"><p >Rehabilitacja ruchowa</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/terapia-pedagogiczna"><p >Terapia pedagogiczna</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/terapia-logopedyczna"><p >Terapia logopedyczna</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/terapia-reki"><p >Terapia ręki</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/kreatywnosc"><p >Kreatywność</p ></NavLink>
                            <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/kynoterapia-dogoterapia"><p >Kynoterapia (dogoterapia)</p ></NavLink>
                        </div>
                        <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/terapeuci"><p >Terapeuci</p ></NavLink>
                        <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/galeria"><p >Galeria</p ></NavLink>
                        <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/warto-wiedziec"><p >Warto wiedzieć</p ></NavLink>
                        <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/cennik"><p >Cennik</p ></NavLink>
                        <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/szkolenia"><p >Szkolenia</p ></NavLink>
                        <NavLink onClick={this.closeBurgerMenu} activeClassName="menu-selected" to="/kontakt"><p >Kontakt</p ></NavLink>
                    </div>
                </div>
            </div >
        )
    }
}
