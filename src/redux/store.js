import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/counter';

const createDebugger = require('redux-flipper').default;
const middlewares = [__DEV__ && createDebugger()];

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: middlewares,
});
