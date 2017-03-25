import React, { Component, PropTypes } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'

export default class IndexView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render () {
    return (
      <div className='main-view'>
        <div className='btn-group'>
          <Link to='/home' className='' activeClassName='active'>Enter To My World !</Link>
        </div>
        <div className='view'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>
      </div>
    )
  }
}
