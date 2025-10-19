import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFavourites } from "../../../services/favourites/FavouriteContext";
import styled from "styled-components/native";
import { ResturantInfo } from "../../../../model";

const FavouriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 25px;
  right: -3%;
  width: 64px;
  z-index: 9;
`;
export default function Favourites({
  restaurant,
}: {
  restaurant: ResturantInfo;
}) {
  const { addFavourites, removeFavourites, favourites } = useFavourites();
  const isFavourite = favourites.find((x) => x.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        isFavourite ? removeFavourites(restaurant) : addFavourites(restaurant)
      }
    >
      <FontAwesome
        name={isFavourite ? "heart" : "heart-o"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
}
