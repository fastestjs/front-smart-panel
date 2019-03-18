import React, { Component } from 'react';

import './index.less';

import { Button, List } from 'antd-mobile';
// import axios from 'axios';

export default class PageAbout extends Component {
    constructor(...props) {
        super(...props);

    }

    componentDidMount() {
        // axios.get(`${window.location.protocol}//fastest.oa.com/cgi-bin/proxydomain/getAll`).then((result) => {
        //     this.setState({
        //         mylist: result.data.myList,
        //         otherlist: result.data.otherList
        //     });
        // });
    }

    render() {
        return (
            <div className="page-index">
                <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                    <List.Item
                        extra={<Button type="ghost" size="small" inline>small</Button>}
                        multipleLine
                    >
                        Regional manager
                        <List.Item.Brief>
                            Can be collected, refund, discount management, view data and other operations
                        </List.Item.Brief>
                    </List.Item>
                    <List.Item
                        extra={<Button type="primary" size="small" inline>small</Button>}
                        multipleLine
                    >
                        Regional manager
                        <List.Item.Brief>
                            Can be collected, refund, discount management, view data and other operations
                        </List.Item.Brief>
                    </List.Item>
                </List>
            </div>
        );
    }
}
