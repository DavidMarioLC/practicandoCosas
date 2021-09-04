import * as actions from "../actionTypes/index.js";

export const clickAdd = (value) => ({
  type: actions.BURN,
  payload: {
    value,
  },
});

export const discountCalories = (value) => ({
  type: actions.DESCOUNT,
  payload: {
    value,
  },
});
