import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/about';
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
                    <Route path={`/about`} component={About} />
                </Switch>
            </Router>
        );
    }
}