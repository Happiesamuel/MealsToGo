import { useState } from "react";
import { FlatListProps, View, Text } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import styled from "styled-components/native";
import { ResturantInfo } from "../../../../model";
import { SafeArea } from "../components/utility/safe-area.component";
import { useRestaurants } from "../../../services/resturant/resturant.context";
import SearchComponent from "../components/SearchComponent";

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

export default function ResturantScreen() {
  const { restaurants, isLoading, err } = useRestaurants();

  // const resturant = [
  //   {
  //     name: "Some Resturant",
  //     icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  //     photos: [
  //       "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  //     ],
  //     address: "200 some random street",
  //     isOpeningNow: true,
  //     rating: 4,
  //     isClosedTemporarily: true,
  //     id: 1,
  //   },
  //   {
  //     name: "Some Resturant",
  //     icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  //     photos: [
  //       "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  //     ],
  //     address: "200 some random street",
  //     isOpeningNow: true,
  //     rating: 4,
  //     isClosedTemporarily: true,
  //     id: 2,
  //   },
  //   {
  //     name: "Some Resturant",
  //     icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  //     photos: [
  //       "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  //     ],
  //     address: "200 some random street",
  //     isOpeningNow: true,
  //     rating: 4,
  //     isClosedTemporarily: true,
  //     id: 3,
  //   },
  //   {
  //     name: "Some Resturant",
  //     icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  //     photos: [
  //       "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  //     ],
  //     address: "200 some random street",
  //     isOpeningNow: true,
  //     rating: 4,
  //     isClosedTemporarily: true,
  //     id: 4,
  //   },
  // ];
  return (
    <SafeArea>
      <SearchComponent />
      {isLoading && !err && (
        <Spinner animating={true} size={30} color={"#D0421B"} />
      )}

      {err && <Text>{err}</Text>}

      {!isLoading && !err && (
        <ResturantFlatList
          data={restaurants}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <ResturantInfoCard resturant={item} />}
        />
      )}
    </SafeArea>
  );
}
