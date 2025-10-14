import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import ResturantScreen from "../screens/ResturantScreen";
import { Text } from "react-native";
import ResturantDetailScreen from "../screens/ResturantDetailScreen";
const ResturantStack = createStackNavigator();
export default function ResturauntNavigator() {
  return (
    <ResturantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <ResturantStack.Screen name="Resturant" component={ResturantScreen} />
      <ResturantStack.Screen
        name="ResturantDetail"
        component={ResturantDetailScreen}
      />
    </ResturantStack.Navigator>
  );
}
