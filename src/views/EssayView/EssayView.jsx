import React, { Component, PropTypes } from 'react'
import './EssayView.less'
import axios from 'axios'

import TimeBox from 'components/TimeBox/TimeBox'

export default class EssayView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }

  componentWillMount() {
    axios.get('/api/essay').then((res) => {
      this.setState({
        list:res.data.data
      })
      console.info(res.data.data)
    }).catch((error) => {
      console.warn(error)
    })
  }



  render() {
    return (
      <div className="essay">
        <div className="list">
          {
            this.state.list.map(function(item,index){
              return (
                <div className="item" key={item.id}>
                  <div className="cover">
                    <img src={item.cover}></img>
                  </div>
                  <div className="info">{item.info}</div>
                  <div className="status">
                    <TimeBox time={item.createtime} />
                    <div className="author"><span className="text">by:</span>{item.author}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
    );
  }
}
