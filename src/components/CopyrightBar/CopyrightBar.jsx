import React, { Component, PropTypes } from 'react'
import './CopyrightBar.less'

export default class CopyrightBar extends Component {
  render() {
    return (
      <div className="copyright-bar">
        <p className="copyright">Copyright &copy;2017 <a className="weburl" target="_blank" href="http://www.forbetter.me">forbetter.me</a>&nbsp;All Rights Reserved.&nbsp;
         <a href="http://www.miitbeian.gov.cn/" target="_blank">豫ICP备16007426号-1</a></p>
        <p></p>
    </div>
    );
  }
}
