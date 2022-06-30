import * as actionsTypes from './actions-types';


export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrease: () => dispatch({ type:actionsTypes.DECREASE }),
    reset: () => dispatch({ type:actionsTypes.RESET }),

  };
};

