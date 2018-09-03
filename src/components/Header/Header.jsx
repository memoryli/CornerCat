import React, { Component } from 'react'
import './header.less'

export default class Header extends Component {
    render() {
        return (
            <header>
                <a href="https://github.com/memoryli">
                    <img src="../../../static/img/github.png"/>
                </a>
                <div className="header">
                    <a href="/" className="brand" rel="start">
                        <span className="site-title">Karlton's Blog</span>
                    </a>
                    <p className="site-subtitle">To Be a Better Me</p>
                </div>
            </header>
        );
    }
}
