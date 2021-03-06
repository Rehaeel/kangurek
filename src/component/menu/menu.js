import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";
import home from "../icons/home.png";

export default class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            menuOfertaOpen: false,
            menuKlubOpen: false,
            burgerMenuOpen: false,
        };
    }

    toggleBurgerMenu = () => {
        this.setState({ burgerMenuOpen: !this.state.burgerMenuOpen });
    };

    closeBurgerMenu = () => {
        this.setState({ burgerMenuOpen: false });
    };

    /******* menu oferta *******/

    menuOfertaOpener = () => {
        this.setState({ menuOfertaOpen: true });
    };

    menuOfertaCloser = () => {
        this.setState({ menuOfertaOpen: false });
    };

    /******* menu oferta *******/

    menuKlubOpener = () => {
        this.setState({ menuKlubOpen: true });
    };

    menuKlubCloser = () => {
        this.setState({ menuKlubOpen: false });
    };

    /******* Height on Mobile *******/

    updateVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    componentDidMount() {
        this.updateVH();
    }

    render() {
        return (
            <div className="menu">
                <div className="menu-container">
                    <NavLink to="/" onClick={this.closeBurgerMenu}>
                        <img
                            src={home}
                            alt="strona domowa"
                            className="menu-home"
                        />
                    </NavLink>
                    <p
                        className="menu-button"
                        style={{
                            display: this.state.burgerMenuOpen
                                ? "block"
                                : "none",
                        }}
                        onClick={this.toggleBurgerMenu}
                    >
                        {this.state.burgerMenuOpen ? "X" : "☰"}
                    </p>
                    <div
                        className={`menu-tabs ${
                            this.state.burgerMenuOpen ? "otwarte-menu" : ""
                        }`}
                    >
                        <a
                            onClick={this.closeBurgerMenu}
                            href="https://www.facebook.com/centrumkangurek/"
                            target="_blank"
                            rel="noreferrer"
                            alt=""
                        >
                            <p>Wydarzenia [FB]</p>
                        </a>
                        <a
                            onClick={this.closeBurgerMenu}
                            href="/#oferta"
                            alt=""
                        >
                            <p
                                onMouseEnter={this.menuOfertaOpener}
                                onMouseLeave={this.menuOfertaCloser}
                                onClick={this.closeBurgerMenu}
                            >
                                Oferta
                            </p>
                        </a>
                        <div
                            style={{ cursor: "pointer", display: "block" }}
                            className={`menu-oferta ${
                                this.state.menuOfertaOpen ? "oferta-opened" : ""
                            }`}
                            onMouseEnter={this.menuOfertaOpener}
                            onMouseLeave={this.menuOfertaCloser}
                        >
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/integracja-sensoryczna"
                                onMouseEnter={this.menuKlubOpener}
                                onMouseLeave={this.menuKlubCloser}
                            >
                                <p>Integracja Sensoryczna</p>
                            </NavLink>
                            <div
                                className={`klub-kangurka ${
                                    this.state.menuKlubOpen
                                        ? "klub-kangurka-opened"
                                        : ""
                                }`}
                                onMouseEnter={this.menuKlubOpener}
                                onMouseLeave={this.menuKlubCloser}
                            >
                                <NavLink
                                    onClick={this.closeBurgerMenu}
                                    activeClassName="menu-selected"
                                    to="/klub-kangurka"
                                >
                                    <p>Klub Kangurka</p>
                                </NavLink>
                            </div>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/sensomotoryczna-terapia-widzenia"
                            >
                                <p>Sensomotoryczna Terapia Widzenia</p>
                            </NavLink>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/rehabilitacja-ruchowa"
                            >
                                <p>Rehabilitacja ruchowa</p>
                            </NavLink>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/terapia-pedagogiczna"
                            >
                                <p>Terapia pedagogiczna</p>
                            </NavLink>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/terapia-logopedyczna"
                            >
                                <p>Terapia logopedyczna</p>
                            </NavLink>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/terapia-reki"
                            >
                                <p>Terapia ręki</p>
                            </NavLink>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/kreatywnosc"
                            >
                                <p>Kreatywność</p>
                            </NavLink>
                            <NavLink
                                onClick={this.closeBurgerMenu}
                                activeClassName="menu-selected"
                                to="/kynoterapia-dogoterapia"
                            >
                                <p>Kynoterapia (dogoterapia)</p>
                            </NavLink>
                        </div>
                        <NavLink
                            onClick={this.closeBurgerMenu}
                            activeClassName="menu-selected"
                            to="/terapeuci"
                        >
                            <p>Terapeuci</p>
                        </NavLink>
                        <NavLink
                            onClick={this.closeBurgerMenu}
                            activeClassName="menu-selected"
                            to="/galeria"
                        >
                            <p>Galeria</p>
                        </NavLink>
                        <NavLink
                            onClick={this.closeBurgerMenu}
                            activeClassName="menu-selected"
                            to="/warto-wiedziec"
                        >
                            <p>Warto wiedzieć</p>
                        </NavLink>
                        <NavLink
                            onClick={this.closeBurgerMenu}
                            activeClassName="menu-selected"
                            to="/cennik"
                        >
                            <p>Cennik</p>
                        </NavLink>
                        <NavLink
                            onClick={this.closeBurgerMenu}
                            activeClassName="menu-selected"
                            to="/kontakt"
                        >
                            <p>Kontakt</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
