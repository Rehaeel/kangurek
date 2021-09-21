import React from 'react';
import './sections.css';

export default class Sections extends React.Component {
    convertToDashes(word) {
        let str = word;
        str = str.replace(/\s+/g, '-').toLowerCase();
        return str;
    }

    render() {
        return (
            <div className={`sections-overlay ${this.props.name ? this.props.name + '-section' : ''} `}>
                <div className="sections" style={{ width: `${this.props.width}% ` }}>
                    <h1>{this.props.name}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}