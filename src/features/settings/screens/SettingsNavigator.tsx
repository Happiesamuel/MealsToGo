import { View, Text } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SettingsScreen from "../../resturants/screens/SettingsScreen";
import FavouritesScreen from "./FavouritesScreen";
import CameraScreen from "./CameraScreen";

const SettingsStack = createStackNavigator();
export default function SettingsNavigator() {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
}
