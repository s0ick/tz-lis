import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {MapContainer, TileLayer} from 'react-leaflet'
import L from 'leaflet';

import {RoutingMachine} from '../../utils/routing-machine';
import {getCoords} from '../../redux/selectors/map.selectors';
import {IMap} from '../../common/models/map-models';

const defaultSettings = {
  position: {
    lat: 59.9386,
    lng: 30.3141
  },
  zoom: 10
};

const defaultStyles = {
  minWidth: '400px',
  height: '768px',
  backgroundColor: '#9f9e9e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden'
};

export const AppMap: FC<IMap> = ({width}) => {
  const [isUpdateMap, setIsUpdateMap] = useState<boolean>(false);
  const points = useSelector(getCoords);
  const mapRef = useRef<any>(null);

  const options = useMemo(() => {
    if (width < 631 && width > 420) {
      return {
        zoomScale: 3,
        translate: '-40%'
      };
    }

    if (width < 731 && width > 631) {
      return {
        zoomScale: 3,
        translate: '0%'
      };
    }

    return {
      zoomScale: 2,
      translate: '10%'
    };
  }, [width]);

  useEffect(() => {
    if (points.startPoint && points.endPoint) {
      setIsUpdateMap(true);
    } else {
      // Returns the map to its original coordinates.
      // If this is not convenient, then you can remove it by removing the condition.
      if (mapRef.current) {
        L.control.scale().addTo(mapRef.current);
        const newValueZoom = mapRef.current.getZoom();

        mapRef.current.setView([
            defaultSettings.position.lat,
            defaultSettings.position.lng
          ],
          newValueZoom
        );
      }
    }
  }, [points, mapRef.current]);

  useEffect(() => {
    if (isUpdateMap && mapRef.current) {
        const newValueZoom = mapRef.current.getZoom() - options.zoomScale;
        mapRef.current.setZoom(newValueZoom);
      setIsUpdateMap(false);
    }
  }, [isUpdateMap, mapRef.current, options]);

  return (
    <div style={{...defaultStyles, width, position: 'relative'}}>
      <div style={{
        width: '1536px',
        height: '1536px',
        position: 'absolute',
        right: options.translate
      }}>
        <MapContainer
          ref={mapRef}
          center={defaultSettings.position}
          zoom={defaultSettings.zoom}
        >
          <TileLayer
            attribution={`&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors`}
            url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          />
          {(points.startPoint && points.endPoint) && <RoutingMachine points={points}/>}
        </MapContainer>
      </div>
    </div>
  );
};
