import React, { Component } from 'react'
import './Hello.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'Hello World!'
    }
  }
  render () {
    return (
      <div id='Hello'>
        <div className='msg'>{this.state.msg}</div>
        <p className='doc'>
          <i className='redux'>Redux's</i> <a href='http://redux.js.org/' target='_blank'>doc</a>
          ( or <a href='http://cn.redux.js.org/' target='_blank'>zh-doc</a> )
        </p>
        <p className='doc'>
          <i className='router'>react-router's</i> <a href='https://reacttraining.com/react-router/web/example/basic' target='_blank'>doc</a>
        </p>
      </div>
    )
  }
}
