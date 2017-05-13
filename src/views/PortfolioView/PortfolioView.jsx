import React, { Component, PropTypes } from 'react'
import './PortfolioView.less'
import axios from 'axios'

import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Icon } from 'antd';

import PortfolioBox from 'components/PortfolioBox/PortfolioBox'

const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
  ' Asia known as motorcycles.',
  title: 'Motorcycle',
};

let dataArray = [
  { image: 'https://zos.alipayobjects.com/rmsportal/DGOtoWASeguMJgV.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/BXJNKCeUSkhQoSS.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/TDIbcrKdLWVeWJM.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/SDLiKqyfBvnKMrA.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/UcVbOrSDHCLPqLG.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/QJmGZYJBRLkxFSy.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/PDiTkHViQNVHddN.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/beHtidyjUMOXbkI.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/vJcpMCTaSKSVWyH.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/dvQuFtUoRmvWLsZ.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/QqWQKvgLSJaYbpr.png' },
  { image: 'https://zos.alipayobjects.com/rmsportal/pTfNdthdsUpLPLJ.png' },
];

dataArray = dataArray.map(item => ({ ...item, ...textData }));

export default class PortfolioView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
      list:[]
    };
  }

  componentWillMount() {
    axios.get('/api/portfolio').then((res) => {
      this.setState({
        list:res.data.data
      })
    }).catch((error) => {
      console.warn(error)
    })
  }

  render() {
    return (
      <div className="portfolio">
        <div className="portfolio-box">
            {
              this.state.list.map(function (item,index) {
                return (
                  <PortfolioBox picItem={item} key={item.id} className="pic-details-demo"/>
                );
              })
            }
        </div>
      </div>
    );
  }
}
