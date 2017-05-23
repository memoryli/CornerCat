import React, { Component, PropTypes } from 'react'
import './GiftView.less'
import axios from 'axios'

export default class GiftView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    };
  }

  componentDidMount() {
    axios.get('/api/gift').then((res) => {
      this.setState({
        list:res.data.data.contentlist
      })
    }).catch((error) => {
      console.warn(error)
    })
  }

  render() {
    return (
      <div className="gift">
        <ul className="gift-list">
          {
            this.state.list.map(function (item,index) {
              return (
                <li className="gift-list-item">
                  <img src={item.imgurl}></img>
                  <p>{item.info}</p>
                </li>
              )
            })
          }
        </ul>
    </div>
    );
  }
}
