import React, { Component, PropTypes } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'
import './MainView.css'

import NavBar from 'components/NavBar/NavBar'
import WelcomeBar from 'components/WelcomeBar/WelcomeBar'
import CopyrightBar from 'components/CopyrightBar/CopyrightBar'

export default class MainView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render () {
    return (
      <div className='main-view main-bg'>
        <NavBar />
        <WelcomeBar />
        <div className='view'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>
        <CopyrightBar/>
      </div>
    )
  }
}
