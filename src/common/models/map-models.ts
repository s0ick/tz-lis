export interface ICoords {
  lat: number,
  lng: number
}

export interface IInitialState {
  startPoint: null | ICoords,
  endPoint: null | ICoords
}

export interface IMap {
  width: number
}
