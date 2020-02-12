import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Table from './Layout/Table';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Table />
        </div>
      </Provider>
    );
  }
}
export default App;
