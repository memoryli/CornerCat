import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router ,Route, Link } from 'react-router-dom'
import routes from 'routes'
import './App.css'
import NavBar from 'components/NavBar/NavBar'

import * as Views from './routes'


export default class App extends Component {
  render () {
    console.info(Views.MainView)
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Route path="/home" component={Views.MainView.default}/>
          <Route path="/portfolio" component={Views.PortfolioView.default}/>
          <Route path="/traveler" component={Views.TravelerView.default}/>
          <Route path="/essay" component={Views.EssayView.default}/>
          <Route path="/design" component={Views.DesignView.default}/>
          <Route path="/gift" component={Views.GiftView.default}/>
          <Route path="/about" component={Views.AboutView.default}/>
        </div>
    </Router>
    )
  }
}
