import {RootState} from '../store';

export const getCoords = (state: RootState) => ({
  startPoint: state.map.startPoint,
  endPoint: state.map.endPoint
});
