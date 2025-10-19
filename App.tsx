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
import AppNavigation from "./src/infrastructure/navigation/AppNavigation";
import FavouritesContextProvider from "./src/services/favourites/FavouriteContext";
import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./src/services/Firebase";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    signInWithEmailAndPassword(auth, "email@example.com", "password123")
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        setIsAuthenticated(true);
      })
      .catch((error) => console.log("Auth error:", error.message));
  }, []);

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <ResturantsContextProvider>
              <AppNavigation />
            </ResturantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="dark" />
    </>
  );
}
