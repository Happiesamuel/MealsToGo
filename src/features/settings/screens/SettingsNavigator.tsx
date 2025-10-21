import { View, Text } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SettingsScreen from "../../resturants/screens/SettingsScreen";
import FavouritesScreen from "./FavouritesScreen";

const SettingsStack = createStackNavigator();
export default function SettingsNavigator() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        // ...TransitionPresets.ModalPresentationIOS,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
}
