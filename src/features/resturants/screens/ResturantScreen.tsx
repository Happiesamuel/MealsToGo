import React, { useState } from "react";
import {
  FlatList,
  FlatListProps,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ResturantInfo } from "../../../../model";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const Seaarch = styled.View`
  padding: ${(props) => props.theme.space.at(3)};
`;

const ResturantFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
    gap: 16,
  },
})<FlatListProps<ResturantInfo>>``;

const Search = styled(Searchbar)`
  border-radius: 16px;
`;

export default function ResturantScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const resturant = [
    {
      name: "Some Resturant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "200 some random street",
      isOpeningNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some Resturant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "200 some random street",
      isOpeningNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some Resturant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "200 some random street",
      isOpeningNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
    {
      name: "Some Resturant",
      icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos: [
        "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      ],
      address: "200 some random street",
      isOpeningNow: true,
      rating: 4,
      isClosedTemporarily: true,
    },
  ];
  return (
    <SafeArea>
      <Seaarch>
        <Search
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </Seaarch>
      <ResturantFlatList
        data={resturant}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ResturantInfoCard resturant={item} />}
        //  showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        // contentContainerStyle={{ padding: 16, gap: 16 }}
      />
    </SafeArea>
  );
}
