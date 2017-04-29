import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './MainView.css'

import WelcomeBar from 'components/WelcomeBar/WelcomeBar'
import CopyrightBar from 'components/CopyrightBar/CopyrightBar'

export default class MainView extends Component {
  render () {
    return (
      <Router>
        <div className='main-view main-bg'>
          <WelcomeBar />
          <CopyrightBar/>
        </div>
      </Router>
    );
  }
}
