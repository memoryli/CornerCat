import React, { Component, PropTypes } from 'react'
import './WelcomeBar.less'

import TweenOne from 'rc-tween-one';
const TweenOneGroup = TweenOne.TweenOneGroup;

export default class WelcomeBar extends Component {
  constructor(props) {
    super(props);
    this.animation = { rotate: 360, duration: 1000 };
    this.state = {
      moment: null,
      reverse:false,
      status:''
    }
  }

  onMouseMove = () => {
    if (this.state.status !== 'complete') return;
    if (!this.state.reverse) {
     setTimeout(()=>{
       this.setState({
        reverse: true,
        moment: null,
      });
     },0)
   } else {
     setTimeout(()=>{
       this.setState({
        reverse: false,
        moment: null,
      });
     },0);
   }
  }

  onChange = (e) => {
    if (e.mode === 'onComplete' || e.mode === 'onStart') {
      setTimeout(() => {
        this.setState({
          status: 'complete',
        });
      }, 0);
    } else {
      this.setState({
        status: '',
      });
    }
  }

  render () {
    return (
      <TweenOne
        animation={this.animation}
        reverse={this.state.reverse}
        onChange={this.onChange}
      >
      <div className="welcome-bar">
        <div className="content" onMouseMove={this.onMouseMove}>
          <p>Remember</p>
          <p>your</p>
          <p>dreams</p>
        </div>
      </div>
    </TweenOne>
    );
  }
}
