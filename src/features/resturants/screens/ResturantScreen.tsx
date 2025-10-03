import React, { useState } from "react";
import { Platform, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";
import styled from "styled-components/native";
const Container = styled.SafeAreaView<{ os: string }>`
  flex: 1;
  margin-top: ${(props) =>
    props.os === "android" ? `${StatusBar.currentHeight}px` : "0px"};
`;

const Seaarch = styled.View`
  padding: ${(props) => props.theme.space.at(3)};
`;
const List = styled.View`
  padding: ${(props) => props.theme.space.at(3)};
  flex: 1;
  gap: ${(props) => props.theme.space.at(3)};
`;
const Search = styled(Searchbar)`
  border-radius: 16px;
`;
export default function ResturantScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const resturant = {
    name: "Some Resturant",
    icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos: [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address: "200 some random street",
    isOpeningNow: true,
    rating: 4,
    isClosedTemporarily: true,
  };
  return (
    <Container os={Platform.OS}>
      {/* // <Container> */}
      <Seaarch>
        <Search
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </Seaarch>
      <List>
        <ResturantInfoCard resturant={resturant} />
        <ResturantInfoCard resturant={resturant} />
        <ResturantInfoCard resturant={resturant} />
        <ResturantInfoCard resturant={resturant} />
      </List>
    </Container>
  );
}
