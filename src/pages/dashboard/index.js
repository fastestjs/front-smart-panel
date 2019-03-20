import React, { Component } from 'react';
import { Radio, Flex, List, Button, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import './index.less';

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}

const tabs = [
    { title: '测试环境' },
    { title: '插件' }
];
const RadioItem = Radio.RadioItem;

export default class PageDashboard extends Component {
    constructor(...props) {
        super(...props);
        this.state = {
            envList: [],
            value: 0
        };
    }

    componentWillMount() {
        window.addEventListener('message', this.handleEventListenerCallback, false);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.handleEventListenerCallback, false);
    }

    handleEventListenerCallback = (event) => {
        // 监听消息，一般来自父窗口的消息
        const { data } = event;

        // 处理事件包括：
        // 传递可选的列表信息，以便界面进行展示
        this.setState({
            envList: data.envList || []
        });
    };

    onChange(value) {
        console.log('checkbox');

        this.setState({
            value
        });

        window.parent.postMessage({
            message: '用户切换了测试环境',
            envId: value
        }, '*');
    };

    render() {
        const { value, envList } = this.state;
        // const envList = [
        //     { value: 0, label: '测试环境1' },
        //     { value: 1, label: '测试环境2' },
        //     { value: 2, label: '测试环境N' }
        // ];
        return (
            <div className="page-about">
                <WhiteSpace />
                <StickyContainer>
                    <Tabs tabs={tabs}
                          initalPage={'t2'}
                          renderTabBar={renderTabBar}
                    >
                        <div style={{}}>
                            <List renderHeader={() => '选择测试环境'}>
                                {envList.map(i => (
                                    <RadioItem key={i.value} checked={value === i.value}
                                               onChange={() => this.onChange(i.value)}>
                                        {i.label}
                                    </RadioItem>
                                ))}
                            </List>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '100px'
                        }}>
                            <Button type="primary" inline style={{ marginRight: '20px' }}>eruda</Button>
                            <Button type="ghost" inline style={{ marginRight: '4px' }}
                                    className="am-button-borderfix">重新加载页面</Button>
                        </div>
                    </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        );
    }
}
