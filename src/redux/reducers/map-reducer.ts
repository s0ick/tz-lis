import {createSlice} from '@reduxjs/toolkit';

import {setCoordsReducer} from './reducers';

const mapDataSlice = createSlice({
  name: 'app/map',
  initialState: {
    startPoint: null,
    endPoint: null
  },
  reducers: {
    setCoords: setCoordsReducer,
    replaceCoords: state => {
      state.startPoint = null;
      state.endPoint = null;
    }
  }
});

export const {
  actions: {
    setCoords,
    replaceCoords
  },
  reducer: mapDataReducer
} = mapDataSlice;
