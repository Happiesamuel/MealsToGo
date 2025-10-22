import { View, FlatListProps, TouchableOpacity } from "react-native";
import React from "react";
import { SafeArea } from "../../resturants/components/utility/safe-area.component";
import { useFavourites } from "../../../services/favourites/FavouriteContext";
import styled from "styled-components/native";
import { ResturantInfo } from "../../../../model";
import { useNavigation } from "@react-navigation/native";
import ResturantInfoCard from "../../resturants/components/ResturantInfoCard";
import { Text } from "../../../components/typography/text.component";
import { StackNavigationProp } from "@react-navigation/stack";
const ResturantFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
    // paddingBottom:80,
    gap: 16,
  },
})<FlatListProps<ResturantInfo>>``;

const NoFav = styled.View`
  align-items: center;
  justify-content: center;
`;

export type ResturantStackParamList = {
  Resturant: undefined;
  ResturantDetail: { resturant: ResturantInfo };
};

export default function FavouritesScreen() {
  const { favourites } = useFavourites();
  const navigation =
    useNavigation<StackNavigationProp<ResturantStackParamList, "Resturant">>();
  return (
    <SafeArea>
      {favourites.length ? (
        <ResturantFlatList
          data={favourites}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResturantDetail", { resturant: item })
              }
            >
              <ResturantInfoCard resturant={item} />
            </TouchableOpacity>
          )}
        />
      ) : (
        <NoFav>
          <Text>No favourites yet</Text>
        </NoFav>
      )}
    </SafeArea>
  );
}
