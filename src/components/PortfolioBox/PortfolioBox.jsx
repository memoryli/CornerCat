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
            <h1><a>{title}</a></h1>
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
      <div className="pic-details-demo-wrapper">
        <div  className="pic-details-demo">
          <QueueAnim type="bottom" className={`${this.props.className}-title`}>
              <h1 key="h1"><a>{this.props.picItem.boxtitle}</a></h1>
          </QueueAnim>
          {/*<QueueAnim*/}
            {/*delay={this.getDelay}*/}
            {/*component="ul"*/}
            {/*className={`${this.props.className}-image-wrapper`}*/}
            {/*interval={0}*/}
            {/*type="bottom"*/}
          {/*>*/}
            {/*{this.getLiChildren()}*/}
          {/*</QueueAnim>*/}
        <div className="post-meta">
            <span className="post-time">
                <span className="post-meta-item-icon">
                    <i className="fa fa-calendar-o"></i>
                </span>
                <span className="post-meta-item-text">发表于</span>
                <time title="创建于" itemProp="dateCreated datePublished" dateTime="2017-09-19T14:40:06+08:00">2017-09-19 </time>
            </span>
            <span className="post-category">
                <span className="post-meta-divider">|</span>
                <span className="post-meta-item-icon">
                    <i className="fa fa-folder-o"></i>
                </span>
                <span className="post-meta-item-text">分类于</span>
                <span itemProp="about" itemScope="" itemType="http://schema.org/Thing">
                    <a href="/categories/JavaScript/" itemProp="url" rel="index">
                        <span itemProp="name">JavaScript</span>
                    </a>
                </span>
            </span>
            <span className="post-comments-count">
                <span className="post-meta-divider">|</span>
                <span className="post-meta-item-icon">
                    <i className="fa fa-comment-o"></i>
                </span>
                <a href="/call-apply-bind-this.html#SOHUCS" itemProp="discussionUrl">
                    <span id="url::http://cherryblog.site/call-apply-bind-this.html" className="cy_cmt_count">2</span>
                </a>
                <span id="/call-apply-bind-this.html" className="leancloud_visitors">
                    <span className="post-meta-divider">|</span>
                    <span className="post-meta-item-icon">
                        <i className="fa fa-eye"></i> </span>
                    <span className="post-meta-item-text">阅读次数 </span>
                    <span className="leancloud-visitors-count"></span>
                </span>
                <div className="post-wordcount">
                    <span className="post-meta-item-icon">
                        <i className="fa fa-edit"></i>
                    </span>
                    <span className="post-meta-item-text">字数统计</span>
                    <span title="字数统计">3,314 字 </span>
                    <span className="post-meta-divider">|</span>
                    <span className="post-meta-item-icon">
                        <i className="fa fa-clock-o"></i>
                    </span>
                    <span className="post-meta-item-text">阅读时长</span>
                    <span title="阅读时长">13 分钟</span>
                </div>
            </span>
        </div>
        <div className="post-body" itemProp="articleBody"><p><a
            href="https://user-gold-cdn.xitu.io/2017/9/3/c042568e973e72674c2e731b7df02d3b?imageView2/1/w/1200/h/700/q/85/interlace/1&amp;quo"
            className="fancybox fancybox.image" rel="group"><img
            src="https://user-gold-cdn.xitu.io/2017/9/3/c042568e973e72674c2e731b7df02d3b?imageView2/1/w/1200/h/700/q/85/interlace/1&amp;quo" alt="" />
        </a></p><h1 id="前言"><a href="#前言" className="headerlink" title="前言"></a>前言</h1><p>最近在读 zepto
            的源码，深有感触，感觉随便一段代码都可以延伸出一大堆的知识点，在看到深拷贝和浅拷贝的时候，之前只是了解过什么是深拷贝什么是浅拷贝，并没有对齐实现进行探索，所以本文主要讲一下什么是深拷贝、什么是浅拷贝、深拷贝与浅拷贝的区别，以及怎么进行深拷贝和怎么进行浅拷贝。</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <footer className="post-footer">
                <div className="post-eof"></div>
            </footer>
        </div>
        <div className="post-button text-center">
            <a className="btn" href="/earning-react-js-is-easier-than-you-think.html#more" rel="contents">阅读全文 »</a>
        </div>
        </div>
      </div>
    );
  }

}
