import React from "react";
import { Map as MapElement } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapContent } from './Map.styles';
import Markers from "./Markers";
import { UserDetails } from "utils/types";

const MAPBOX_PROPS = {
  initialViewState: {
    latitude: 51.9194,
    longitude: 19.1451,
    zoom: 6,
  },
  mapboxAccessToken: `${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
  mapStyle: `${process.env.NEXT_PUBLIC_MAPBOX_STYLES}`,
  style: {
    width: "100%",
    height: "100%",
  },
  doubleClickZoom: false,
};

const userPins: UserDetails.UserInfo[] = [
  {
    expires: "2022-08-24T08:31:35.017Z",
    user: {
      email: "molik223@gmail.com",
      image:
        "https://cdn.discordapp.com/avatars/336429686907207681/a_4be443312bb1d1ce15c6812544a9ecc0.gif",
      name: "soruse",
      position: {
        longitude: 19,
        latitude: 51,
      },
    },
    userId: "cl5s628jd000609fag7kd3fo6",
  },

  {
    expires: "2022-08-24T08:31:35.017Z",
    user: {
      email: "molik223@gmail.com",
      image:
        "https://cdn.discordapp.com/avatars/336429686907207681/a_4be443312bb1d1ce15c6812544a9ecc0.gif",
      name: "soruse",
      position: {
        longitude: 21,
        latitude: 52,
      },
    },
    userId: "cl5s628jd000609fag7asdasdasd",
  },
];

const Map = () => {
  return (
    <MapContent>
      <MapElement {...MAPBOX_PROPS} reuseMaps data-testid="mapElement">
        <Markers userPins={userPins} />
      </MapElement>
    </MapContent>
  );
};

export default Map;
