import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfo from "../components/ResturantInfo";
import ResturantInfoCard from "../components/ResturantInfoCard";
export default function ResturantScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const resturant = {
    name: "Some Resturant",
    icon: "string",
    photos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBh7r03auo3jtjlp5ApGFtpMh30-b1FaEPVA&s",
    ],
    address: "200 some random street",
    isOpeningNow: true,
    rating: 4,
    isClosedTemporarily: "string",
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <ResturantInfoCard resturant={resturant} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 16,
  },
});
