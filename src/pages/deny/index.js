import React, { Component } from 'react';
import { Radio, List, NoticeBar, WhiteSpace } from 'antd-mobile';

import './index.less';


const RadioItem = Radio.RadioItem;

export default class PageDeny extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            value: 0,
        };
    }
    onChange(value) {
        console.log('checkbox');
        this.setState({
            value,
        });

    };
    render() {
        const { value } = this.state;
        const data = [
            { value: 0, label: '测试环境1' },
            { value: 1, label: '测试环境2' },
            { value: 2, label: '测试环境N' }
        ];
        return (
            <div className="page-deny">
                <WhiteSpace />
                <NoticeBar mode="closable" icon={null}>你无权使用ID为1的环境!</NoticeBar>
                <NoticeBar mode="closable" icon={null}>如需使用,请登录fastest管理平台进行申请</NoticeBar>
                <div style={{}}>
                    <List renderHeader={() => '你也可以切换其他列表 '}>
                        {data.map(i => (
                            <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                                {i.label}
                            </RadioItem>
                        ))}
                    </List>
                </div>
                <WhiteSpace />
            </div>
        );
    }
}
