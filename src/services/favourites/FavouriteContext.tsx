import { createContext, useContext, useEffect, useState } from "react";
import { ResturantInfo } from "../../../model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../auth/AuthContext";

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
  const { user } = useAuth();
  useEffect(
    function () {
      if (user) {
        loadFavourites(user.user.uid);
      }
    },
    [user]
  );
  useEffect(
    function () {
      if (user) {
        storeFavourites(favourites, user.user.uid);
      }
    },
    [favourites, user]
  );

  async function storeFavourites(data: ResturantInfo[], uid: string) {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (error) {
      console.log(error);
    }
  }
  async function loadFavourites(uid: string) {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
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
