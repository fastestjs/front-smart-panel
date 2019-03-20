import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Deny from './pages/deny';
import Auth from './pages/auth';
import Index from './pages/index';

import './App.less';

export default class App extends Component {
    componentDidMount() {
        // this.props.dispatch(loadAll());
        window.addEventListener('message', function (event) {
            // 监听父窗口发送过来的数据向服务器发送post请求
            console.log('--iframe-- event', event);

            window.parent.postMessage({
                from: 'iframe',
                originalData: event.data
            }, '*');
        }, false);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={`/`} component={Index} />
                    <Route path={`/dashboard`} component={Dashboard} />
                    <Route path={`/deny`} component={Deny} />
                    <Route path={`/auth`} component={Auth} />
                </Switch>
            </Router>
        );
    }
}