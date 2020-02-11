import { combineReducers } from 'redux';
import diceReducer from './diceReducers';
export default combineReducers({
  number: diceReducer
});
