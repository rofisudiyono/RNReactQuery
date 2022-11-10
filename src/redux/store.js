import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import counterReducer from '../redux/counter';

const middlewares = [
  /* other middlewares */
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
