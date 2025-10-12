import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { useLocation } from "../../../services/location/location.context";
import { locations } from "../../../services/location/location.mock";
const Seaarch = styled.View`
  padding: 0px ${(props) => props.theme.space.at(3)} 10px;
`;
const Search = styled(Searchbar)`
  border-radius: 8px;
  padding: 0px !important;
`;
export default function SearchComponent() {
  const { search, keyword } = useLocation();
  const [searchQuery, setSearchQuery] = useState(keyword);
  useEffect(() => {
    search(searchQuery);
  }, []);
  return (
    <Seaarch>
      <Search
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
