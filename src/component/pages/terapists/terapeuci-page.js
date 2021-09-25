import React from 'react';
import './terapeuci-page.css';
import Section from '../../sections/sections';
import ReactGA from 'react-ga';

import { terapeuciList } from './terapeuci-list';

export default class Terapieuci extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
            height: false,
            opacity: false
        }
    }

    showMoreClick(index) {
        if (this.state.showMore !== index) {
            this.setState({ showMore: index, height: index, opacity: index })
        } else {
            this.setState({ showMore: false, height: false, opacity: false })
        }
    }

    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="terapeuci-page">
                <Section width={80} name={'Terapeuci'}>
                    <div className="terapeuci">
                        {terapeuciList.map((terapist, index) => {
                            return (
                                <div key={index} className="terapeuta">
                                    <img src={terapist.image} alt={`${terapist.name}-terapeuta`} />
                                    <h3>{terapist.name}</h3>
                                    <ul>
                                        {terapist.education.map((educationList, index) => {
                                            return (<li key={index}>{educationList}</li>)
                                        })}
                                    </ul>
                                    <div style={{
                                        maxHeight: this.state.height === index ? 800 : 0,
                                        opacity: this.state.opacity === index ? 1 : 0,
                                        transition: 'max-height 0.5s ease'
                                    }} className="business-experience">
                                        <h4>DOŚWIADCZENIE ZAWODOWE</h4>
                                        <p>{terapist.expirience}</p>
                                    </div>
                                    <p onClick={() => this.showMoreClick(index)} className="show-more">
                                        {this.state.showMore ? 'Zobacz mniej ...' : 'Zobacz więcej ...'}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </Section>
            </div>
        )
    }
}