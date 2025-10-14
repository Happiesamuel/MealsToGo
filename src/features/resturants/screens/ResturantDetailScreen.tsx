import { View, Text } from "react-native";
import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeArea } from "../components/utility/safe-area.component";
import { ResturantInfo } from "../../../../model";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

type ResturantDetailRouteProp = RouteProp<
  {
    Resturant: undefined;
    ResturantDetail: { resturant: ResturantInfo };
  },
  "ResturantDetail"
>;
export default function ResturantDetailScreen() {
  const route = useRoute<ResturantDetailRouteProp>();
  const { resturant } = route.params;
  const [expanded, setExpanded] = useState<string | null>(null);

  const accordion = [
    {
      title: "Breakfast",
      icon: "bread-slice",
      list: ["Eggs Benedict", "Classic Breakfast"],
    },
    {
      title: "Lunch",
      icon: "hamburger",
      list: ["Burger wf Fries", "Steak Sandwich", "Mushroom Soup"],
    },
    {
      title: "Dinner",
      icon: "food-variant",
      list: [
        "Spaghetti Bolognese",
        "Veal Cutlet with Chicken Mushroom Rotini",
        "Steak Frites",
      ],
    },
    {
      title: "Drinks",
      icon: "cup",
      list: ["Coffee", "Tea", "Coke", "Modelo", "Fanta"],
    },
  ];

  const handlePress = (id: string) => setExpanded(id === expanded ? null : id);
  return (
    <SafeArea>
      <ResturantInfoCard resturant={resturant} />
      <ScrollView>
        <List.Section>
          {accordion.map((acc) => (
            <List.Accordion
              title={acc.title}
              key={acc.title}
              left={(props) => <List.Icon {...props} icon={acc.icon} />}
              expanded={acc.title === expanded}
              onPress={() => handlePress(acc.title)}
            >
              {acc.list.map((list) => (
                <List.Item key={list} title={list} />
              ))}
            </List.Accordion>
          ))}
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
}
