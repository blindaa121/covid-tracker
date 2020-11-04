import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '60vw',
        height: '60vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken='pk.eyJ1IjoiYmxpbmRhYTEyMSIsImEiOiJja2gyc2M2NDgwMWx2MnpxbDgyazZxZTRhIn0.QRPXzt2YtFZ2rLKEuuF-0Q'
    />
  );
}

export default Map
