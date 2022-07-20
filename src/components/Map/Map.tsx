import React, { useState } from 'react';
import { Map as MapElement, Marker } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapContent } from './Map.styles';

const MAPBOX_PROPS = {
  initialViewState: {
    latitude: 51.9194,
    longitude: 19.1451,
    zoom: 6,
  },
  mapboxAccessToken: 'pk.eyJ1Ijoic29ydXNhYmxlIiwiYSI6ImNsNXRtYjh0bzBoa3IzZXBrcmQzNWdsM3UifQ.mi2c5VaybNF7KAPqXW06MA',
  mapStyle: 'mapbox://styles/sorusable/cky60aapf902n14l5mt9mlalf',
  style: {
    width: '100%',
    height: '100%',
  },
  doubleClickZoom: false,
};

const Map = () => {
  return (
    // <ReactMapGL
    //   {...viewport}
    //   onViewportChange={(nextViewport) => setViewport(nextViewport)}
    //   mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
    //   mapStyle={process.env.MAPBOX_STYLES}
    //   doubleClickZoom={false}
    // >
    //   {/* <Markers users={users} setUserDetails={setUserDetails} />
    //   {newMarker ? (
    //     <NewMarkerForm
    //       longitude={newMarker.longitude}
    //       latitude={newMarker.latitude}
    //       setNewMarker={setNewMarker}
    //       addNewUser={(origin, about) => addNewUser(origin, about)}
    //       currentUser={currentUser}
    //       userInputs={userInputs}
    //       setUserInputs={setUserInputs}
    //     />
    //   ) : null} */}
    // </ReactMapGL>
    <MapContent>
      <MapElement {...MAPBOX_PROPS}>
        <Marker longitude={19.1451} latitude={51.9194} />
      </MapElement>
    </MapContent>
  );
};

export default Map;
