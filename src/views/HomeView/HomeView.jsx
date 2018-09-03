import React, { Component, PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './HomeView.less'

import WelcomeBar from 'components/WelcomeBar/WelcomeBar'
import CopyrightBar from 'components/CopyrightBar/CopyrightBar'

export default class HomeView extends Component {
  render () {
    return (
      <Router>
        <div className='home-view home-bg'>
          <WelcomeBar />
          {/*<CopyrightBar/>*/}
        </div>
      </Router>
    );
  }
}
