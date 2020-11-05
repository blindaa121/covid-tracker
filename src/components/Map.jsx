import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const Map = ({ casesByCounty, casesByState }) => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 39.220,
        longitude: -95.997,
        zoom: 8
    });


    const [latlng, setLatLng] = useState({
        latitude: viewport.latitude,
        longitude: viewport.longitude
    })

    const [radius, setRadius] = useState(3);

    
    const renderCountyCases = casesByCounty ? casesByCounty.map(county => {
        return (
            <Marker
                longitude={county.longitude}
                latitude={county.latitude}
            >
                <div style={{color: 'white'}}>You are here</div>
                Cases: {county.confirmed}
                <br/>
                Deaths: {county.dead}
            </Marker>
        )
    }) : null;

    const renderStateCases = casesByState ? casesByState.map(state => {
        return (
            <Marker
                longitude={state.longitude}
                latitude={state.latitude}
            >
                <div style={{color: 'white'}}>You are here</div>
                Cases: {state.confirmed}
                <br/>
                Deaths: {state.dead}
            </Marker>
        )
    }) : null;

    const onClickMap = (e) => {
        // console.log(e.lngLat);
        setLatLng({
            latitude: e.lngLat[0],
            longitude: e.lngLat[1]
        });
    }
    
    // console.log(casesByCounty);
    console.log(latlng);

    return (
        <div className="map__container">
            <ReactMapGL
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/blindaa121/ckh2v2irb21al19nwx9v25txy"
                mapboxApiAccessToken='pk.eyJ1IjoiYmxpbmRhYTEyMSIsImEiOiJja2gyc2M2NDgwMWx2MnpxbDgyazZxZTRhIn0.QRPXzt2YtFZ2rLKEuuF-0Q'
                onClick={onClickMap}>
                {renderStateCases}
            </ReactMapGL>
        </div>
    );
}

export default Map
