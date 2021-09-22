import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    thisYear() {
        return new Date().getFullYear();
    }
    render() {
        return (
            <div className="footer">
                <p>Centrum Kangurek © 2017-{this.thisYear()}    Powered by <a href="https://www.facebook.com/rafalprokopiak.visuals" >Rafał Prokopiak</a></p>
            </div>
        )
    }
}