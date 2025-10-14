import { View, Text } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import MapView from "react-native-maps";
import SearchComponent from "../components/SearchComponent";

export default function MapScreen() {
  return (
    <SafeArea>
      <SearchComponent />
      <MapView style={{ flex: 1 }} />
    </SafeArea>
  );
}
