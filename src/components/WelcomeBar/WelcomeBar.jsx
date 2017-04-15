import React, { Component, PropTypes } from 'react'
import './WelcomeBar.less'

export default class WelcomeBar extends Component {
  render () {
    return (
      <div className="welcome-bar">
        <h1>Remember</h1>
        <h1>your</h1>
        <h1>dreams</h1>
      </div>
    );
  }
}
