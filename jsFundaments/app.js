const createStore = (initialState, reduce) => {
  let state = initialState;

  let fnListening = null;

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reduce(state, action);
    fnListening();
  };

  const subscribe = (fn) => {
    fnListening = fn;
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const reducer = (state, action) => {
  return action;
};

const store = createStore("soy el estado global", reducer);

store.subscribe(() => {
  console.log("Estoy escuchando los cambios del estado", store.getState());
});

store.dispatch("primer cambio");
