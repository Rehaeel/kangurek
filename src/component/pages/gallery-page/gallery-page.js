import React from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import './gallery-page.css';
import { photos } from './photos';


export default class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            setCurrentImage: 0,
            viewerIsOpen: false,
            setViewerIsOpen: false
        }
    };

    openLightbox = (index) => {
        this.setState({ setCurrentImage: index, setViewerIsOpen: true })
    }

    closeLightbox = () => {
        this.setState({ setCurrentImage: 0, setViewerIsOpen: false })
    }

    render() {
        return (
            <div className="gallery-page">
                <h1>Galeria</h1>
                <Gallery photos={photos} targetRowHeight={500} onClick={this.openLightbox} />
                <ModalGateway>
                    {this.state.viewerIsOpen ? (
                        <Modal onClose={this.closeLightbox}>
                            <Carousel
                                currentIndex={this.state.currentImage}
                                views={photos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        )
    }
}