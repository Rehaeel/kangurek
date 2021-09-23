import React from 'react';
import './terapeuci-page.css';
import Section from '../../sections/sections';

import { terapeuciList } from './terapeuci-list';

export default class Terapieuci extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
            height: 0,
            opacity: 0
        }
    }

    showMoreClick = () => {
        this.setState({ showMore: !this.state.showMore, height: this.state.height === 0 ? 800 : 0, opacity: this.state.opacity === 0 ? 1 : 0 })
        console.log(this.state.height)
        console.log(this.state.opacity)
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
                                    <h2>{terapist.name}</h2>
                                    <ul>
                                        {terapist.education.map((educationList, index) => {
                                            return (<li key={index}>{educationList}</li>)
                                        })}
                                    </ul>
                                    <div style={{ maxHeight: this.state.height, opacity: this.state.opacity, transition: 'max-height 0.5s ease' }} className="business-experience">
                                        <h4>DOŚWIADCZENIE ZAWODOWE</h4>
                                        <p>{terapist.expirience}</p>
                                    </div>
                                    <p onClick={this.showMoreClick} className="show-more">
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