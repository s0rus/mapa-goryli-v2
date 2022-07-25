import React, { useMemo } from "react";
import { Marker } from "react-map-gl";
import { UserDetails } from "utils/types";
import { PinAvatar } from "./Markers.styles";

interface Props {
  userPins: UserDetails.UserInfo[];
}

const Markers: React.FC<Props> = ({ userPins }) => {
  return (
    <>
      {useMemo(
        () =>
          userPins.map(({ userId, user: { name, position, image } }) => (
            <Marker
              key={`${userId}__pin`}
              longitude={position.longitude}
              latitude={position.latitude}
            >
              <PinAvatar
                src={image}
                alt={`${name} avatar`}
                width="48"
                height="48"
                blurDataURL={image}
                placeholder="blur"
              />
            </Marker>
          )),
        [userPins]
      )}
    </>
  );
};

export default Markers;
