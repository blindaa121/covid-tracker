import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './Map.css'

const Map = ({ casesByCounty, casesByState }) => {
    const [viewport, setViewport] = useState({
        width: '60vw',
        height: '60vh',
        latitude: 38.5148,
        longitude: -94.9989,
        zoom: 3.538
    });

    const [latlng, setLatLng] = useState({
        latitude: viewport.latitude,
        longitude: viewport.longitude
    })

    const [radius, setRadius] = useState(0);
    const [selectedCase, setSelectedCase] = useState(null);
    
    const renderCountyCases = casesByCounty ? casesByCounty.map(county => {
        // console.log('county cases rendered')
        return (
            <Marker
                longitude={county.longitude}
                latitude={county.latitude}
            >
                <button className="marker__button"
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedCase(county);
                        }}>
                    <img src="/coronavirus.png" alt="" style={{width: '35px'}}/>
                </button>
            </Marker>
        )
    }) : null;


    // console.log(selectedCase);

    const renderStateCases = casesByState ? casesByState.map(state => {
        // console.log('statecases render')
        return (
            <Marker
                longitude={state.longitude}
                latitude={state.latitude}
            >
                <button className="marker__button"
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedCase(state);
                        }}>
                    <img src="/coronavirus.png" alt="" style={{width: '35px'}}/>
                </button>
            </Marker>
        )
    }) : null;

    const renderPopUp = () => {
        if (selectedCase) {
            return (
                <Popup
                    latitude={selectedCase.latitude}
                    longitude={selectedCase.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setSelectedCase(null)}
                    >
                    <div className="popup__container">
                        <h1>{selectedCase.location}</h1>
                        <span>Number of Cases: {selectedCase.confirmed}</span>
                        <span>Deaths: {selectedCase.dead}</span>
                    </div>
                </Popup>
            )
        } else {
            return null
        }
    }
    
    // console.log(selectedCase)
    const onClickMap = (e) => {
        // console.log(e.lngLat);
        setLatLng({
            latitude: e.lngLat[0],
            longitude: e.lngLat[1]
        });
    }
    
    // console.log(casesByCounty);
    // console.log(latlng);
    // console.log(viewport);
    return (
        <div className="map__container">
            <ReactMapGL
                {...viewport}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle="mapbox://styles/blindaa121/ckh2v2irb21al19nwx9v25txy"
                mapboxApiAccessToken='pk.eyJ1IjoiYmxpbmRhYTEyMSIsImEiOiJja2gyc2M2NDgwMWx2MnpxbDgyazZxZTRhIn0.QRPXzt2YtFZ2rLKEuuF-0Q'
                onClick={onClickMap}
                style={{borderRadius: '10px'}}>
                {viewport.zoom > 6 ? renderCountyCases : renderStateCases}
                {renderPopUp()}
            </ReactMapGL>
        </div>
    );
}

export default Map
