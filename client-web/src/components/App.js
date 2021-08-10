import { Component } from 'react';
import ExhibitList from './ExhibitList';
//import ProductList from './ProductList';

export class App extends Component {
  render() {
    return (
      <div>
        <div>Art Manager</div>
        <ExhibitList />
      </div>
    );
  }
}

export default App;
