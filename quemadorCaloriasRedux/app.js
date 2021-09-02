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
//reducers
const reducer = (state, action) => {
  switch (action.type) {
    case "TYPE_BURN":
      return {
        ...state,
        caloriesAdd: state.caloriesAdd + action.payload.value,
      };

    case "TYPE_DESCOUNT":
      return {
        ...state,
        totalCalories: state.totalCalories - action.payload.value,
      };

    default:
      return state;
  }
};

let initialState = {
  caloriesAdd: 0,
  totalCalories: 1360563,
};
const store = createStore(initialState, reducer);

store.subscribe(() => {
  console.log("Im observer the initial state!", store.getState());

  let { caloriesAdd, totalCalories } = store.getState();

  window.result.textContent = `Haz quemado ${caloriesAdd.toFixed(2)} Calorias`;
  window.resultTotal.textContent = `Te falta ${totalCalories.toFixed(
    3
  )} Calorias`;
});

//actions
const clickAdd = (value) => ({
  type: "TYPE_BURN",
  payload: {
    value,
  },
});
const discountCalories = (value) => ({
  type: "TYPE_DESCOUNT",
  payload: {
    value,
  },
});

//execute action
const burn = () => {
  const VALUE = 1.42;
  store.dispatch(clickAdd(VALUE));
  store.dispatch(discountCalories(VALUE));
};

//subscribe
store.dispatch(clickAdd(0));
window.burn.addEventListener("click", burn);
