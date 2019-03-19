import React, { Component } from 'react';
import { Button, NoticeBar, WhiteSpace } from 'antd-mobile';

import './index.less';




export default class PageAuth extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            value: 0,
        };
    }
    loginQq() {
        console.log('QQ登录')
    }
    loginToken() {
        console.log('输入token登录')
    }
    render() {
        return (
            <div className="page-auth">
                <WhiteSpace />
                <div style={{ marginTop: '50px' }}>
                    <NoticeBar mode="closable" action={<span style={{ color: '#a1a1a1' }}>不再提示</span>}>你需要登录或者输入token!</NoticeBar>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
                        <Button type="primary" inline style={{ marginRight: '20px' }} onClick={this.loginQq}>QQ登录</Button>
                        <Button type="ghost" inline style={{ marginRight: '4px' }} onClick={this.loginToken} className="am-button-borderfix">输入token登录</Button>
                    </div>
                </div>
                <WhiteSpace />
            </div>
        );
    }
}
