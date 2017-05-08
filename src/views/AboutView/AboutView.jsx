import React, { Component, PropTypes } from 'react'
import './AboutView.less'
import axios from 'axios'

export default class AboutView extends Component {
  render() {
    axios.get('/about').then((res) => {
      console.info("Hello")

    }).catch((error) => {
      console.warn(error)
    })

    return (
      <div className="about">

        <div className="about-item-l">
          <div className="about-left">
            <h1 className="about-tit">Who Am  I ?</h1>
            <p className="about-info">我希望是一个设计师，旅行作家，摄影师或者美食家。但我还不是......</p>
          </div>
          <div className="about-right">
              <div className="about-img">
                <img src="http://img.hb.aicdn.com/c12a049de6bdde4f3e737d263b638ce5b2c025e6b927f-IZdy6q_fw658"></img>
              </div>
              <div className="about-info">
                信仰不灭
              </div>
          </div>
        </div>

        <div className="about-item-r">
          <div className="about-left">
            <div className="about-img">
              <img src="http://cdn.duitang.com/uploads/item/201208/17/20120817205028_PBcHP.thumb.600_0.jpeg"></img>
            </div>
            <div className="about-info">
              爱就去追
            </div>
          </div>
          <div className="about-right">
              <h1 className="about-tit">What Do I Like ?</h1>
              <p className="about-info">我是一个「伪文艺」「伪摄影」「伪旅行」的三伪爱好者！</p>
          </div>
        </div>


    </div>
    );
  }
}
