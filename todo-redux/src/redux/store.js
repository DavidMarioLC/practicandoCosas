import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { noteReducer, filterReducer } from './reducers';

const reducers = {
  notes: noteReducer,
  filter: filterReducer,
};

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
