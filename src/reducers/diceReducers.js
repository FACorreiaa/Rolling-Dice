import { GENERATE_NUMBER } from '../actions/types';

const initialState = {
  number: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NUMBER:
      return {
        ...state,
        number: action.payload
      };
    default:
      return state;
  }
}
