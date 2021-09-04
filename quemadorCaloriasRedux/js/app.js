import store from "./store.js";
import { clickAdd, discountCalories } from "./actions/index.js";

store.subscribe(() => {
  console.log("Im observer the initial state!", store.getState());

  let { caloriesAdd, totalCalories } = store.getState();

  window.result.textContent = `Haz quemado ${caloriesAdd.toFixed(2)} Calorias`;
  window.resultTotal.textContent = `Te falta ${totalCalories.toFixed(
    3
  )} Calorias`;
});

//execute action
const burn = () => {
  const VALUE = 1.42;
  store.dispatch(clickAdd(VALUE));
  store.dispatch(discountCalories(VALUE));
};

//subscribe initial
store.dispatch(clickAdd(0));
window.burn.addEventListener("click", burn);
