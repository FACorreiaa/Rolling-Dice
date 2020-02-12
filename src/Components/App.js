import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Button from './Layout/Button';
import Dice from './Layout/Dice';
import Table from './Layout/Table';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {console.log(this.props)}
        <div>
          <Table />
        </div>
      </Provider>
    );
  }
}
export default App;
