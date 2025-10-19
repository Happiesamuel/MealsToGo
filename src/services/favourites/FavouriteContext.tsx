import { createContext, useContext, useEffect, useState } from "react";
import { ResturantInfo } from "../../../model";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultValue = {
  favourites: [],
  addFavourites: () => {},
  removeFavourites: () => {},
};

const FavouritesContext = createContext<{
  favourites: any[];
  addFavourites: (resturant: ResturantInfo) => void;
  removeFavourites: (resturant: ResturantInfo) => void;
}>(defaultValue);
export default function FavouritesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favourites, setFavourites] = useState<ResturantInfo[]>([]);

  useEffect(function () {
    loadFavourites();
  }, []);
  useEffect(
    function () {
      storeFavourites(favourites);
    },
    [favourites]
  );

  async function storeFavourites(data: ResturantInfo[]) {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("@favourites", jsonValue);
    } catch (error) {
      console.log(error);
    }
  }
  async function loadFavourites() {
    try {
      const value = await AsyncStorage.getItem("@favourites");
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function addFavourites(resturant: ResturantInfo) {
    const isAdded = favourites
      .map((fav) => fav.placeId)
      .includes(resturant.placeId);
    setFavourites((i) => (isAdded ? [...i] : [...i, resturant]));
  }
  function removeFavourites(resturant: ResturantInfo) {
    const isAdded = favourites
      .map((fav) => fav.placeId)
      .includes(resturant.placeId);
    setFavourites((i) =>
      isAdded ? i.filter((x) => x.placeId !== resturant.placeId) : [...i]
    );
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourites, removeFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (context === undefined) throw new Error("Wrong Context");
  return context;
}
