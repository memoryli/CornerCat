import React, { Component, PropTypes } from 'react'
import './AboutView.less'
import axios from 'axios'

export default class AboutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }

  componentDidMount() {
    axios.get('/api/about').then((res) => {
      this.setState({
        list:res.data.data.contentlist
      })
    }).catch((error) => {
      console.warn(error)
    })
  }

  render() {
    return (
      <div className="about">
        {
          this.state.list.map(function (item,index) {

            if (index%2 !== 0) {
              return (
                <div className="about-item-l"  key={item.id}>
                  <div className="about-left">
                    <h1 className="about-tit">{item.title}</h1>
                    <p className="about-info">{item.info}</p>
                  </div>
                  <div className="about-right">
                      <div className="about-img">
                        <img src={item.imgurl}></img>
                      </div>
                      <div className="about-info">{item.imgdesc}</div>
                  </div>
                </div>
              )
            } else {
              return (
                <div className="about-item-r" key={item.id}>
                  <div className="about-left">
                    <div className="about-img">
                      <img src={item.imgurl}></img>
                    </div>
                    <div className="about-info">{item.imgdesc}</div>
                  </div>
                  <div className="about-right">
                      <h1 className="about-tit">{item.title}</h1>
                      <p className="about-info">{item.info}</p>
                  </div>
                </div>
              )
            }

          })
        }

    </div>
    );
  }
}
