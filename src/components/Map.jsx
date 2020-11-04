import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const Map = ({ casesByCounty }) => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 39.220,
        longitude: -95.997,
        zoom: 8
    });

    
    const cases = casesByCounty ? casesByCounty.map(county => {
        return (
            <Marker
                longitude={county.longitude}
                latitude={county.latitude}
            >
                Cases: {county.confirmed}
                <br/>
                Deaths: {county.dead}
            </Marker>
        )
    }) : null;

    const onClickMap = (e) => {
        console.log(e.lngLat);
    }
    
    console.log(casesByCounty);

    return (
        <div className="map__container">
            <ReactMapGL
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/blindaa121/ckh2v2irb21al19nwx9v25txy"
                mapboxApiAccessToken='pk.eyJ1IjoiYmxpbmRhYTEyMSIsImEiOiJja2gyc2M2NDgwMWx2MnpxbDgyazZxZTRhIn0.QRPXzt2YtFZ2rLKEuuF-0Q'
                onClick={onClickMap}>
                {cases}
            </ReactMapGL>
        </div>
    );
}

export default Map
