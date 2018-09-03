import React, { Component, PropTypes } from 'react'
import './WelcomeBar.less'

export default class WelcomeBar extends Component {
  render () {
    return (
      <div className="welcome-bar">
          <footer id="footer" className="footer">
              <div className="footer-inner">
                  <div className="copyright">© <span itemProp="copyrightYear">2018</span> <span className="with-love"><i
                      className="fa fa-heart"></i> </span><span className="author"
                                                                itemProp="copyrightHolder">Karlton</span></div>
                  <div className="busuanzi-count">
                      <script async="" src="https://dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js"></script>
                      <span className="site-uv"><i className="fa fa-user"></i> 访问用户： <span className="busuanzi-value"
                                                                                           id="busuanzi_value_site_uv">50017</span> 人 </span><span
                      className="site-pv"><i className="fa fa-eye"></i> 访问次数： <span className="busuanzi-value"
                                                                                    id="busuanzi_value_site_pv">179979</span> 次</span>
                  </div>
              </div>
          </footer>
      </div>
    );
  }
}
