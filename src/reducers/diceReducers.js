import { GENERATE_NUMBER, PLAYER_RESULT, CPU_RESULT } from '../actions/types';

const initialState = {
  number: [],
  playerWins: 0,
  cpuWins: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NUMBER:
      return {
        ...state,
        number: action.payload.result,
        playerWins: action.payload.playerWins,
        cpuWins: action.payload.cpuWins
      };

    default:
      return state;
  }
}
