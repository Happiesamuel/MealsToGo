import { View, Text } from "react-native";
import React, { useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { SafeArea } from "../components/utility/safe-area.component";
import { ResturantInfo } from "../../../../model";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { Button, List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { useCart } from "../../../services/cart/CartContext";
import { StackNavigationProp } from "@react-navigation/stack";

type ResturantDetailRouteProp = RouteProp<
  {
    Resturant: undefined;
    ResturantDetail: { resturant: ResturantInfo };
  },
  "ResturantDetail"
>;
const OrderButton = styled(Button).attrs({
  color: "#2182BD",
})`
  padding: ${(props) => props.theme.space.at(2)};
  color: #2182bd;
  width: 80%;
  align-self: center;
  border-radius: 6px;
`;

export type ResturantStackParamList = {
  Checkout: undefined;
};

export default function ResturantDetailScreen() {
  const route = useRoute<ResturantDetailRouteProp>();
  const navigation =
    useNavigation<StackNavigationProp<ResturantStackParamList, "Checkout">>();
  const { resturant } = route.params;
  const [expanded, setExpanded] = useState<string | null>(null);
  const { addCart } = useCart();
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
      <OrderButton
        icon="cash"
        mode="contained"
        onPress={() => {
          addCart({ item: "special", price: 1299 }, resturant);
          navigation.navigate("Checkout");
        }}
      >
        Order Special Only 12.99!
      </OrderButton>
    </SafeArea>
  );
}
