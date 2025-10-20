import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import ResturantsContextProvider from "./src/services/resturant/resturant.context";
import LocationContextProvider from "./src/services/location/location.context";
import FavouritesContextProvider from "./src/services/favourites/FavouriteContext";
import AuthContextProvider from "./src/services/auth/AuthContext";
import Navigation from "./src/infrastructure/navigation";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <ResturantsContextProvider>
                <Navigation />
              </ResturantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}
