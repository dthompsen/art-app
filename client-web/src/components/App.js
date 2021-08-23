import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuBar from './MenuBar';
import HomePage from './HomePage';
import ProductList from './ProductList';
import ExhibitList from './ExhibitList';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/home' component={HomePage} />
            <Route path='/products' component={ProductList} />
            <Route path='/exhibits' component={ExhibitList} />
          </Switch>
          <MenuBar />
        </Router>
      </div>
    );
  }
}

export default App;
