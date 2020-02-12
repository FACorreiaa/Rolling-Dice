import { GENERATE_NUMBER } from '../actions/types';

const initialState = {
  playerResult: 0,
  cpuResult: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NUMBER:
      return {
        ...state,
        playerResult: action.payload.playerResult,
        cpuResult: action.payload.cpuResult
      };

    default:
      return state;
  }
}
