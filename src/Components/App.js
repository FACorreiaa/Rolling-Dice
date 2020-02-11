import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Button from './Layout/Button';
import Dice from './Layout/Dice';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Dice />
          <Dice />
          <Button />
        </div>
      </Provider>
    );
  }
}
export default App;
