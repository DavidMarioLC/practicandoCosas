const createStore = (reducer, initialState) => {
  let state = initialState;

  let updater = () => {};

  const getState = () => {
    return state;
  };

  const dispatch = (action) => {
    state = reducer(action, state);
    updater();
  };

  const subscribe = (listenChanges) => {
    updater = listenChanges;
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const reducer = (action, state) => {
  switch (action) {
    case "14":
      return {
        users: state.users.filter((user) => user.age === 14),
      };
    case "13":
      return {
        users: state.users.filter((user) => user.age === 13),
      };
    default:
      return state;
  }
};

let initialState = {
  users: [
    { name: "user 1", age: 12 },
    { name: "user 2", age: 13 },
    { name: "user 3", age: 14 },
    { name: "user 3", age: 14 },
  ],
};

const store = createStore(reducer, initialState);
//store.subscribe()
//store.dispatch()
//store.getState()

store.subscribe(() => {
  console.log("Observando cambios del store:", store.getState());
});

// store.dispatch("voy a cambiar algo");
