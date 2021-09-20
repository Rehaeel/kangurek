import React from 'react';
import './home-page.css';
import homePagePoster from './photos/Centrum-Terapii-i-Rozwoju-Dziecka-Kangurek.jpg';
import maleLapki from './photos/male_lapki.jpg';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <img src={homePagePoster} alt="" className="home-page-poster" />

                <h3 className="home-page-cytat">„Czego nie ma najpierw w zmysłach, tego nie ma później w umyśle”<br />
                    ~B. Pascal</h3>

                <Sections sectionWidth={60}>
                    <h1>O nas</h1>
                    <p>W CENTRUM TERAPII I ROZWOJU DZIECKA KANGUREK  łączymy  naukę z  zabawą,
                        pomagając w ten sposób dzieciom, które przeżywają   trudności rozwojowe, edukacyjne,
                        związane z  integracją zmysłów, z koordynacją wzrokowo-ruchową.</p>
                    <div className="home-about-us">
                        <p><b>Naszą ofertę kierujemy do dzieci:</b><br />
                            – z zaburzeniami integracji sensorycznej<br />
                            – z zaburzeniami mowy, słuchu, wzroku<br />
                            – z problemami szkolnymi (koncentracją, czytaniem, pisaniem, liczeniem)<br />
                            – z zaburzoną koordynacją ruchową<br />
                            – z nadpobudliwością psychoruchową<br />
                            Bazując na naszym sporym doświadczeniu w pracy z dziećmi  prowadzimy również szkolenia i warsztaty dla nauczycieli i rodziców.<br />
                            Ponadto organizujemy kursy dla matek z małymi dziećmi.<br />
                            Cechuje nas miłe, sympatyczne usposobienie, chęć niesienia pomocy, rzetelność i profesjonalizm<br />
                            Zapraszamy
                        </p>
                        <img src={maleLapki} alt="" style={{ justifySelf: 'center' }} />
                    </div>
                </Sections>

                <Sections sectionWidth={100}>
                    <h1>Aktualności</h1>
                    <a href="https://www.facebook.com/centrumkangurek/" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">
                        <div className="facebook-cta" >
                            <h1>znajdź nas na Facebooku!</h1>
                        </div>
                    </a>
                </Sections>

                <Sections sectionWidth={60}>
                    <h1>Oferta</h1>
                    <div className="oferta-box">

                    </div>
                </Sections>
            </div>
        )
    }
}

class Sections extends React.Component {
    render() {
        return (
            <div className="sections" style={{ width: `${this.props.sectionWidth}%`, margin: '0 auto', textAlign: 'center' }}>
                {this.props.children}
            </div>
        )
    }
}

class Offert extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="" />
            </div>
        )
    }
}