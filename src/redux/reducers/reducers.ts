import {PayloadAction} from '@reduxjs/toolkit';

import {IInitialState} from '../../common/models/map-models';
import {IRow} from '../../common/models/table-models';

export const setCoordsReducer = (state: IInitialState, action: PayloadAction<IRow>) => {
  const {fromLat, fromLng, upToLat, upToLng} = action.payload;

  state.startPoint = {
    lat: fromLat,
    lng: fromLng
  };

  state.endPoint = {
    lat: upToLat,
    lng: upToLng
  };
};
