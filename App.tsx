import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import ResturantScreen from "./src/features/resturants/screens/ResturantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./src/features/resturants/screens/SettingsScreen";
import MapScreen from "./src/features/resturants/screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;
  const Tab = createBottomTabNavigator();
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
            })}
          >
            <Tab.Screen name="Resturant" component={ResturantScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}
