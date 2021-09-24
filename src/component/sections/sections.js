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
            <div id={this.props.id ?? ''} className={`sections-overlay ${this.props.name ? this.convertToDashes() : ''} `}>
                <div className={`sections ${this.props.siteName ? 'site-section-' : ''}${this.props.siteName ?? ''}`} style={{ width: `${this.props.width ?? 70}% `, margin: `${this.props.margin ?? '80'}px 0` }}>
                    <h1>{this.props.name}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}