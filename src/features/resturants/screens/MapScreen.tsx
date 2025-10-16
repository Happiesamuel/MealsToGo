import MapView, { Callout, Marker } from "react-native-maps";
import { useLocation } from "../../../services/location/location.context";
import { useRestaurants } from "../../../services/resturant/resturant.context";
import { useEffect, useState } from "react";
import MapCallout from "../components/MapCallout";
import SearchMap from "../../map/SearchMap";
import styled from "styled-components/native";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export default function MapScreen() {
  const { location } = useLocation();
  const { restaurants } = useRestaurants();
  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;
  useEffect(
    function () {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      const lasDelta = northeastLat - southwestLat;
      setLatDelta(lasDelta);
    },
    [location, viewport]
  );

  return (
    <>
      <SearchMap />
      <Map
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              {/* <Callout> */}
                <MapCallout resturant={restaurant} />
              {/* </Callout> */}
            </Marker>
          );
        })}
      </Map>
    </>
  );
}
