import React, { Component, PropTypes } from 'react'
// import { Menu, Icon } from 'antd';
import Menu from 'antd/lib/menu';
import { NavLink as Link } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import './NavBar.less'
const history = createHistory()

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavBar extends Component {
  state = {
    defaultKeys: 'home'
  }
  handleClick = (e) => {
    history.push('/' + e.key)
  }
  render() {
    return (
      <div className="navbar">
      <Menu onClick={this.handleClick} selectedKeys={history.location.pathname == '/'?['home'] :[history.location.pathname.slice(1)]} mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home"><Link to="/home" className="navbar-link">首页</Link></Menu.Item>
        <Menu.Item key="portfolio"><Link to="/portfolio" className="navbar-link">分类</Link></Menu.Item>
        <Menu.Item key="traveler"><Link to="/traveler" className="navbar-link">关于</Link></Menu.Item>
        <Menu.Item key="essay"><Link to="/essay" className="navbar-link">归档</Link></Menu.Item>
        <Menu.Item key="design"><Link to="/design" className="navbar-link">标签</Link></Menu.Item>
        <Menu.Item key="gift"><Link to="/gift" className="navbar-link">留言板</Link></Menu.Item>
        <Menu.Item key="about"><Link to="/about" className="navbar-link">照片</Link></Menu.Item>
      </Menu>

    </div>
    );
  }
}
