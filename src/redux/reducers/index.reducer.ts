import {combineReducers} from 'redux';

import {mapDataReducer} from './map-reducer';

export const rootReducer = combineReducers({
  map: mapDataReducer
});
