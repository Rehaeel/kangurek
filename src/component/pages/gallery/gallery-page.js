import React from 'react';
import './gallery-page.css';
import LightBox from './light-box.js';


export default class GalleryPage extends React.Component {
    render() {
        return (
            <div className="gallery-page">
                <h1>Galeria</h1>
                <LightBox />
            </div>
        )
    }
}