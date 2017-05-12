import React, { Component, PropTypes } from 'react'
import './WelcomeBar.less'

export default class WelcomeBar extends Component {
  render () {
    return (
      <div className="welcome-bar">
        <div className="content">
          <p>Remember</p>
          <p>your</p>
          <p>dreams</p>
        </div>
      </div>
    );
  }
}
