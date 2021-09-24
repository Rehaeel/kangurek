import React from 'react'
import './workshops.css'
import ReactGA from 'react-ga';

export default class Workshops extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="workshop-page">
                <p>
                    W przygotowaniu szkolenie:<br />
                    <strong>„Jak wspomagać dziecko z zaburzeniami integracji sensorycznej?”</strong>
                </p>
            </div >
        )
    }
}
