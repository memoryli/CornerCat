import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd';
import './NavBar.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavBar extends Component {
  state = {
    current: 'home',
    defaultKeys: 'home'
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="navbar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">首页</Menu.Item>
        <Menu.Item key="portfolio">作品</Menu.Item>
        <Menu.Item key="traveler">行者</Menu.Item>
        <Menu.Item key="essay">随笔</Menu.Item>
        <Menu.Item key="design">设计</Menu.Item>
        <Menu.Item key="gift">好物</Menu.Item>
        <Menu.Item key="about">关于</Menu.Item>
      </Menu>
    </div>
    );
  }
}
