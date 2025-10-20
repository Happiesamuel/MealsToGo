import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { View, Text } from "react-native";
import AccountScreen from "../../features/account/screens/AccountScreen";
import LoginScreen from "../../features/account/screens/LoginScreen";
import RegisterScreen from "../../features/account/screens/RegisterScreen";
import Layout from "../../features/account/components/Layout";

export default function AccountNavigation() {
  const Stack = createStackNavigator();
  return (
    // <Layout>
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: "horizontal",
      })}
    >
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
    // </Layout>
  );
}
