import React from 'react'
import './CTA-button.css'

export default class CTAbutton extends React.Component {
    render() {
        return (
            <a href={this.props.href}>
                <button className="CTA-button">
                    {this.props.children}
                </button>
            </a>
        )
    }
}
