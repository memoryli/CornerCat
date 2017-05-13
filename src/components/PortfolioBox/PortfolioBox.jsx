import React, { Component, PropTypes } from 'react'
import './PortfolioBox.less'

import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import { Button, Icon } from 'antd';

export default class PortfolioBox extends Component {

  static propTypes = {
    className: React.PropTypes.string,
    picItem: React.PropTypes.object,
  }

  static defaultProps = {
    className: 'pic-details-demo',
    picItem:{},
  }

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
      wrapperHeight:500,
    };
  }

  componentDidMount(){
    this.setState({
      wrapperHeight:Math.ceil(this.props.picItem.piclist.length / 4) * 96 + 150
    });
  }

  onImgClick = (e, i) => {
    const picOpen = this.state.picOpen;
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    this.setState({
      picOpen,
    });
  }

  onClose = (e, i) => {
    const picOpen = this.state.picOpen;
    picOpen[i] = false;
    this.setState({
      picOpen,
    });
  }

  onTweenEnd = (i) => {
    const picOpen = this.state.picOpen;
    delete picOpen[i];
    this.setState({
      picOpen,
    });
  }

  getDelay = (e) => {
    const i = e.index + this.props.picItem.piclist.length % 4;
    return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  }

  getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 76;
    const imgBoxWidth = 130;
    const imgBoxHeight = 96;

    return this.props.picItem.piclist.map((item, i) => {
      const image = item.picurl;
      const title = item.pictitle;
      const content = item.piccontent;
      const id = item.picid;

      const isEnter = typeof this.state.picOpen[i] === 'boolean';
      const isOpen = this.state.picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 4);
      const imgLeft = isEnter ? imgBoxWidth * (i % 4) : 0;
      const isRight = Math.floor((i % 4) / 2);
      const isTop = Math.floor(i / 4);
      let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter ? { width: '100%', height: 175, zIndex: 1 } : null;
      const liAnimation = isOpen ?
        ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
        ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
      let aAnimation = isEnter ?
        ({
          delay: 400,
          ease: 'easeInOutCubic',
          width: imgWidth,
          height: imgHeight,
          onComplete: this.onTweenEnd.bind(this, i),
          left: imgBoxWidth * (i % 4),
          top: isTop ? imgBoxHeight : 0,
        }) : null;
      aAnimation = isOpen ?
        ({
          ease: 'easeInOutCubic',
          left: isRight ? (imgBoxWidth * 2) - 10 : 0,
          width: '50%',
          height: 175,
          top: 0,
        }) : aAnimation;

      // 位置 js 控制；
      return (
        <TweenOne
        key={i}
        style={{
          left,
          top,
          ...liStyle,
        }}
        component="li"
        className={isOpen ? 'open' : ''}
        animation={liAnimation}
      >
        <TweenOne
          component="a"
          onClick={e => this.onImgClick(e, i)}
          style={{
            left: imgLeft,
            top: imgTop,
          }}
          animation={aAnimation}
        >
          <img src={image} width="100%" height="100%" />
        </TweenOne>
        <TweenOneGroup
          enter={[
            { opacity: 0, duration: 0, type: 'from', delay: 400 },
            { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
          ]}
          leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
          component=""
        >
          {isOpen && <div
            className={`${this.props.className}-text-wrapper`}
            key="text"
            style={{
              left: isRight ? '0%' : '50%',
            }}
          >
            <h1>{title}</h1>
            <Icon type="cross" onClick={e => this.onClose(e, i)} />
            <em />
            <p>{content}</p>
            <Button type="primary" size="small" onClick={() => this.goDetail(id)}>Go detail</Button>
          </div>}
        </TweenOneGroup>
      </TweenOne>);
    });
  }

  goDetail = (d) => {
    // 跳转到详情页
  }
  render() {

    return (
      <div className="pic-details-demo-wrapper" style={{height:this.state.wrapperHeight+'px'}}>
        <div  className="pic-details-demo">
          <QueueAnim type="bottom" className={`${this.props.className}-title`}>
            <h1 key="h1">{this.props.picItem.boxtitle}</h1>
            <p key="p">{this.props.picItem.boxdesc}</p>
          </QueueAnim>
          <QueueAnim
            delay={this.getDelay}
            component="ul"
            className={`${this.props.className}-image-wrapper`}
            interval={0}
            type="bottom"
          >
            {this.getLiChildren()}
          </QueueAnim>
        </div>
      </div>
    );
  }

}
