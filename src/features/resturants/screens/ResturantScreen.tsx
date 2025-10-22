import { useState } from "react";
import { FlatListProps, View, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import styled from "styled-components/native";
import { ResturantInfo } from "../../../../model";
import { SafeArea } from "../components/utility/safe-area.component";
import { useRestaurants } from "../../../services/resturant/resturant.context";
import SearchComponent from "../components/SearchComponent";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useFavourites } from "../../../services/favourites/FavouriteContext";
import FavouritesBar from "../../../components/typography/favourites/FavouritesBar";
import FadeInView from "../../../components/animations/FadeAnimation";

const ResturantFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
    // paddingBottom:80,
    gap: 16,
  },
})<FlatListProps<ResturantInfo>>`
  /* background-color: red; */
`;

const Spinner = styled(ActivityIndicator)`
  flex: 1;
`;
export type ResturantStackParamList = {
  Resturant: undefined;
  ResturantDetail: { resturant: ResturantInfo };
};
export default function ResturantScreen() {
  const navigation =
    useNavigation<StackNavigationProp<ResturantStackParamList, "Resturant">>();
  const { restaurants, isLoading, err } = useRestaurants();
  const { favourites } = useFavourites();
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <SearchComponent
        isToggled={isToggled}
        onToogle={() => setIsToggled(!isToggled)}
      />
      {isToggled && favourites.length && (
        <FavouritesBar onDetail={navigation.navigate} favourites={favourites} />
      )}
      {isLoading && !err && (
        <Spinner animating={true} size={30} color={"#D0421B"} />
      )}

      {err && <Text>{err}</Text>}

      <>
        {!isLoading && !err && (
          <ResturantFlatList
            data={restaurants}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <FadeInView>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("ResturantDetail", { resturant: item })
                  }
                >
                  <ResturantInfoCard resturant={item} />
                </TouchableOpacity>
              </FadeInView>
            )}
          />
        )}
      </>
    </SafeArea>
  );
}
