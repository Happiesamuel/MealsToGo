import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
interface ResturantInfoCard {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpeningNow: boolean;
  rating: number;
  isClosedTemporarily: string;
}

export default function ResturantInfoCard({
  resturant,
}: {
  resturant: ResturantInfoCard;
}) {
  const {
    name,
    icon,
    photos,
    address,
    isOpeningNow,
    rating,
    isClosedTemporarily,
  } = resturant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{ uri: photos.at(0) }}
      />
      <Text>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
