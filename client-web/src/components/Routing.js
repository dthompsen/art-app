import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProductList from './ProductList';
import ExhibitList from './ExhibitList';

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/products' component={ProductList} />
          <Route path='/exhibits' component={ExhibitList} />
        </Switch>
      </Router>
    )
  }
}
