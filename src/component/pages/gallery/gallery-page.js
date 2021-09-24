import React from 'react';
import './gallery-page.css';
import LightBox from './light-box.js';
import ReactGA from 'react-ga';

export default class GalleryPage extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="gallery-page">
                <h1>Galeria</h1>
                <LightBox />
            </div>
        )
    }
}