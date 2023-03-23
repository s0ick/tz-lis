import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from './reducers/index.reducer';

const middlewares = [logger].filter(m => !!m);

export const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(
      ...middlewares
    )
  )
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
