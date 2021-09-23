import React from 'react';
import './sections.css';

export default class Sections extends React.Component {
    convertToDashes() {
        let str = this.props.name;
        str = str.replace(' ', '-').toLowerCase();
        return str + '-section';
    }

    render() {
        return (
            <div className={`sections-overlay ${this.props.name ? this.convertToDashes() : ''} `}>
                <div className="sections" style={{ width: `${this.props.width ?? 70}% ` }}>
                    <h1>{this.props.name}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}