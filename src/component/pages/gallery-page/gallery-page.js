import React from 'react';
import Gallery from 'react-photo-gallery';
import './gallery-page.css';
import { photos } from './photos';


export default class GalleryPage extends React.Component {
    render() {
        return (
            <div className="gallery-page">
                <h1>Galeria</h1>
                <Gallery photos={photos} targetRowHeight={500} />
            </div>
        )
    }
}