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