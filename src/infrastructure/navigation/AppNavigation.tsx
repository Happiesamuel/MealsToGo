import MapScreen from "../../features/resturants/screens/MapScreen";
import SettingsScreen from "../../features/resturants/screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ResturauntNavigator from "../../features/resturants/components/ResturauntNavigator";
import FavouritesContextProvider from "../../services/favourites/FavouriteContext";
import LocationContextProvider from "../../services/location/location.context";
import ResturantsContextProvider from "../../services/resturant/resturant.context";
export default function AppNavigation() {
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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <ResturantsContextProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                const iconName = tabs(focused, route);
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              contentStyle: {
                backgroundColor: "red",
                paddingTop: 0,
                marginTop: 0,
              },
headerStyle:{

},
              headerShown: false,
            })}
          >
            <Tab.Screen name="Resturant" component={ResturauntNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </ResturantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
}
