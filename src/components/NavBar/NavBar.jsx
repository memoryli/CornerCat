import React, { Component, PropTypes } from 'react'
import { Menu, Icon } from 'antd';
import { NavLink as Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './NavBar.less'

const history = createHistory()

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
    // history.push('/' + e.key)
  }
  render() {
    return (
      <div className="navbar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">首页</Menu.Item>
        <Menu.Item key="portfolio" disabled>作品</Menu.Item>
        <Menu.Item key="traveler" disabled>行者</Menu.Item>
        <Menu.Item key="essay" disabled>随笔</Menu.Item>
        <Menu.Item key="design" disabled>设计</Menu.Item>
        <Menu.Item key="gift" disabled>好物</Menu.Item>
        <Menu.Item key="foo" disabled>关于</Menu.Item>
      </Menu>
    </div>
    );
  }
}
