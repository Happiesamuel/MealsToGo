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
import { Ionicons } from "@expo/vector-icons";
import ResturantsContextProvider from "./src/services/resturant/resturant.context";
import LocationContextProvider from "./src/services/location/location.context";
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;
  const Tab = createBottomTabNavigator();
  type IconName = keyof typeof Ionicons.glyphMap;
  const iconObj: {
    name: string;
    focus: IconName;
    normal: IconName;
    slug: string;
  }[] = [
    {
      name: "Resturant",
      focus: "restaurant",
      slug: "restaurant",
      normal: "restaurant-outline",
    },
    {
      name: "Map",
      focus: "map",
      slug: "map",
      normal: "map-outline",
    },
    {
      name: "Settings",
      focus: "settings",
      slug: "settings",
      normal: "settings-outline",
    },
  ];

  function tabs(focused: boolean, { name }: { name: string }): IconName {
    const icon = iconObj.find((x) => x.name === name)!;
    return focused ? icon.focus : icon.normal;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <ResturantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    const iconName = tabs(focused, route);
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                  headerShown: false,
                })}
              >
                <Tab.Screen name="Resturant" component={ResturantScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </ResturantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}
