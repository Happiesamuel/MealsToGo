import MapView, { Callout, Marker } from "react-native-maps";
import { useLocation } from "../../../services/location/location.context";
import { useRestaurants } from "../../../services/resturant/resturant.context";
import { useEffect, useState } from "react";
import MapCallout from "../components/MapCallout";
import SearchMap from "../../map/SearchMap";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ResturantInfo } from "../../../../model";
import { NavigatorScreenParams } from "@react-navigation/native";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
type ResturantStackParamList = {
  Resturant: undefined;
  ResturantDetail: { resturant: ResturantInfo };
};

type RootStackParamList = {
  Resturant: NavigatorScreenParams<ResturantStackParamList>;
  Map: undefined;
};
type MapScreenNavigationProp = StackNavigationProp<RootStackParamList, "Map">;

type Props = {
  navigation: MapScreenNavigationProp;
};
export default function MapScreen({ navigation }: Props) {
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
              <Callout
                onPress={() =>
                  navigation.navigate("Resturant", {
                    screen: "ResturantDetail",
                    params: { resturant: restaurant },
                  })
                }
              >
                <MapCallout resturant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
}
