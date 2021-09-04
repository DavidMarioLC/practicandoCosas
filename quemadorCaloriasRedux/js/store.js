import { createStore } from "./redux/index.js";
import { reducer } from "./reducers/index.js";

let initialState = {
  caloriesAdd: 0,
  totalCalories: 1360563,
};

const store = createStore(initialState, reducer);

export default store;
