import { createContext, useContext, useEffect, useState } from "react";
import { resturantsRequest, resturantTransform } from "./resturantservice";
import { useLocation } from "../location/location.context";
import { mocks } from "./mock";

const defaultValue = {
  restaurants: [],
  isLoading: false,
  err: null,
};

const RestaurantContext = createContext<{
  restaurants: any[];
  isLoading: boolean;
  err: null | string;
}>(defaultValue);
export default function ResturantsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);
  const { location } = useLocation();
  const loc = `${location.lat},${location.lng}` as keyof typeof mocks;
  async function resFun(locat: any) {
    try {
      setIsLoading(true);
      setRestaurants([]);
      setTimeout(async () => {
        const res = await resturantsRequest(locat);
        setRestaurants(resturantTransform(res));
        setIsLoading(false);
        setErr(null);
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      setErr(error as any);
    }
  }
  useEffect(
    function () {
      if (location) {
        resFun(loc);
      }
    },
    [location]
  );
  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, err }}>
      {children}
    </RestaurantContext.Provider>
  );
}
export function useRestaurants() {
  const context = useContext(RestaurantContext);
  if (context === undefined) throw new Error("Wrong Context");
  return context;
}
