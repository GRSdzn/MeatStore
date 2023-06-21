import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const MapComponent = () => {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: [55.76, 37.64],
          zoom: 10,
        }}
        width={'790px'}
        height={'451px'}
      />
    </YMaps>
  );
};

export default MapComponent;