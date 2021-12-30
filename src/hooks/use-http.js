import { useReducer, useCallback } from 'react';

function httpReducer(latestState, action) {
  if (action.type === 'SENDING') {
    return {
      status: 'pending',
      data: null,
      error: null
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      status: 'completed',
      data: action.responseData,
      error: null
    };
  }

  if (action.type === 'ERROR') {
    return {
      status: 'completed',
      data: null,
      error: action.errorMessage
    };
  }

  return latestState;
}

function useHttp(requestFunction, startWithPending = false) {

  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,            //basically if startWithPending is true then the status state is 'pending' for the first render of the component in which the hook is used and loadingSpinner displayed, if false then the first status is null until a change in state
    data: null,
    error: null
  });

  const sendRequest = useCallback(async (requestData) => {  //sendRequest was used as a dependency in the useEffect of a component and useCallback is used to prevent unnecessary re-creation of this function 
    dispatch({ type: 'SENDING' });

    try {
      const responseData = await requestFunction(requestData);
      dispatch({ type: 'SUCCESS', responseData });

    } catch (error) {
      dispatch({ type: 'ERROR', errorMessage: error.message || 'Something went wrong!'});
    }
  }, [requestFunction]);

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
