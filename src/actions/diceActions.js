import { GENERATE_NUMBER } from './types';
import generateDiceNumber from '../util/DiceNumber';
export const generateNumber = () => {
  return dispatch => {
    const result = generateDiceNumber();
    console.log(result);
    return dispatch({
      type: GENERATE_NUMBER,
      payload: result
    });
  };
};

//missing error validation ofc
