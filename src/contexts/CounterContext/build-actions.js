import * as actionsTypes from './actions-types';


export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrease: () => dispatch({ type:actionsTypes.DECREASE }),
    reset: () => dispatch({ type:actionsTypes.RESET }),
    setCounter: (newCounter) => dispatch({ type:actionsTypes.SET_COUNTER,payload:{ counter:newCounter } }),
    reset: () => dispatch({ type:actionsTypes.RESET }),
    asyncIncrese : () => asyncIncreaseFn(dispatch),
    asyncDecrease : () => asyncDecreaseFn(dispatch),
  };
};
async function asyncIncreaseFn(dispatch) {
  dispatch({type: actionsTypes.ASYNC_INCREASE_START});
  return Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (random.math()>0.02){
        dispatch({type: actionsTypes.ASYNC_INCREASE_END});
        resolve("ok");
      }
      else{
        dispatch({type: actionsTypes.ASYNC_INCREASE_ERROR});
        reject("error");
      }
    },500);

  });
}


async function asyncDecreaseFn(dispatch) {
  dispatch({type: actionsTypes.ASYNC_DECREASE_START});
  return Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (random.math()>0.02){
        dispatch({type: actionsTypes.ASYNC_DECREASE_END});
        resolve("ok");
      }
      else{
        dispatch({type: actionsTypes.ASYNC_DECREASE_ERROR});
        reject("error");
      }
    },500);

  });
}

