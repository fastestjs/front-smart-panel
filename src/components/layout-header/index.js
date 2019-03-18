import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar, Divider } from 'antd';
import { NavLink } from 'react-router-dom';
import GlobalHeader from "../global-header";


import './index.less';

class LayoutHeader extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            activeMenu: '',
            isInit: false
        };
    }

    handleIsActive = (curMenu) => {
        if (!curMenu) {
            return;
        }
        // console.log('---handleIsActive---', curMenu);

        const map = {
            ['/']: 'dashboard',
            [`/about`]: 'about'
        };

        let newMenuId = map[curMenu.url];

        if (newMenuId && newMenuId !== this.state.activeMenu) {
            setTimeout(() => {
                this.setState({
                    activeMenu: newMenuId,
                    isInit: true
                });
            }, 0);
        }
    };

    render() {
        let { activeMenu } = this.state;

        const breadcrumbList = [{
            title: '一级菜单',
            href: '/',
          }, {
            title: '二级菜单',
            href: '/',
          }, {
            title: '三级菜单',
          }];
        return (
            <Layout.Header className="layout-header header" style={{ background: '#fff', padding: 0 }} >
                <span className="title">Fastest管理平台</span>
                <Divider type="vertical" style={{ height: 22 }} />
                {/* <GlobalHeader /> */}

                <Menu
                    theme="light"
                    mode="horizontal"
                    selectedKeys={[activeMenu]}
                    style={{ lineHeight: '64px', marginRight: 24, position: 'absolute', top: 0, right: 0 }}
                >
                    <Menu.Item key="dashboard">
                        <NavLink to={`/dashboard`} isActive={this.handleIsActive}>工作台</NavLink>
                    </Menu.Item>

                    <Menu.Item key="about">
                        {/* <NavLink to={`/about`} target="_blank">
                            <Icon type="question-circle" style={{fontSize: 20 + 'px'}}/>
                        </NavLink> */}
                        <NavLink to={`/about`} isActive={this.handleIsActive}>帮助</NavLink>
                    </Menu.Item>

                    {/* <Menu.Item key="avatar"> */}
                        <NavLink to={`/avatar`} isActive={this.handleIsActive}>
                            <Avatar icon="user" />
                        </NavLink>
                    {/* </Menu.Item> */}



                </Menu>
            </Layout.Header>
        );
    }
}

export default LayoutHeader;