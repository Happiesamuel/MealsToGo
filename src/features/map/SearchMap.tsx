import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { useLocation } from "../../services/location/location.context";
import { locations } from "../../services/location/location.mock";

const Seaarch = styled.View`
  padding: 10px ${(props) => props.theme.space.at(3)} 10px;
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 5%;
`;
const Search = styled(Searchbar)`
  border-radius: 8px;
  padding: 0px !important;
`;
export default function SearchMap() {
  const { search, keyword } = useLocation();
  const [searchQuery, setSearchQuery] = useState(keyword);
  useEffect(
    function () {
      setSearchQuery(keyword);
    },
    [keyword]
  );
  return (
    <Seaarch>
      <Search
        icon="map"
        placeholder="Search for a location"
        onChangeText={(text) => {
          setSearchQuery(text as keyof typeof locations);
        }}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      />
    </Seaarch>
  );
}
