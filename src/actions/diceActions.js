import { GENERATE_NUMBER } from './types';
import generateDiceNumber from '../util/DiceNumber';
export const rollDice = () => {
  return dispatch => {
    const result = [generateDiceNumber(), generateDiceNumber()];
    let playerWins = 0;
    let cpuWins = 0;
    if (result[0] > result[1]) {
      playerWins++;
    } else if (result[0] < result[1]) {
      cpuWins++;
    }
    dispatch({
      type: GENERATE_NUMBER,
      payload: {
        result,
        playerWins,
        cpuWins
      }
    });
  };
};

//missing error validation ofc
