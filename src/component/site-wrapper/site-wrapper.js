import React from 'react'
import './site-wrapper.css'

export default class SiteWrapper extends React.Component {
    render() {
        return (
            <div className="site-wrapper">
                <div className="site-header" style={{ background: `url(${this.props.img}) no-repeat center center`, backgroundSize: 'cover', height: this.props.height ?? 200}}>
                    <h1>{this.props.header}</h1>
                </div>
                <div className={`rest-of-site site-${this.props.header}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
