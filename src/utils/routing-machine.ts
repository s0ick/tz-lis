import {createControlComponent} from '@react-leaflet/core';
import 'leaflet-routing-machine';
import L from 'leaflet';

const createRoutineMachineLayer = ({points}: any) => L.Routing.control({
  waypoints: [
    L.latLng(points.startPoint.lat, points.startPoint.lng),
    L.latLng(points.endPoint.lat, points.endPoint.lng)
  ],
  show: false,
  addWaypoints: false,
  routeWhileDragging: false,
  fitSelectedRoutes: true,
  showAlternatives: false
});


export const RoutingMachine = createControlComponent(createRoutineMachineLayer);
