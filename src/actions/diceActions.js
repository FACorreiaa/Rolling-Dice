import { GENERATE_NUMBER } from './types';
import generateDiceNumber from '../util/DiceNumber';
export const generateNumber = () => {
  return dispatch => {
    const playerResult = generateDiceNumber();
    const cpuResult = generateDiceNumber();
    return dispatch({
      type: GENERATE_NUMBER,
      payload: {
        playerResult,
        cpuResult
      }
    });
  };
};

//missing error validation ofc
