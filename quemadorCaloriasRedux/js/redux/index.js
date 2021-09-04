const createStore = (initialState, reducer) => {
  let state = initialState;
  let eventFn = null;

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(state, action);
    eventFn();
  };

  const subscribe = (fn) => {
    eventFn = fn;
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export { createStore };
