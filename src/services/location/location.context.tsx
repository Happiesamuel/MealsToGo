import { createContext, useContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./locationservice";
import { locations } from "./location.mock";

type LocationContextType = {
  location: any;
  isLoading: boolean;
  err: string | null;
  keyword: keyof typeof locations;
  search: (query: keyof typeof locations) => Promise<void> | void;
};

const defaultValue: LocationContextType = {
  location: {},
  isLoading: false,
  err: null,
  keyword: "san francisco",
  search: async () => {},
};

const LocationContext = createContext<LocationContextType>(defaultValue);
export default function LocationContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [location, setLocation] = useState({});
  const [keyword, setKeyword] =
    useState<keyof typeof locations>("san francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState<null | string>(null);
  async function onSearch(query: keyof typeof locations) {
    try {
      const key =
        (query.toLowerCase() as keyof typeof locations) || "san francisco";
      if (!key.length) {
        return;
      }
      setIsLoading(true);
      setKeyword(key);
      const res = await locationRequest(key);
      setLocation(locationTransform(res));
      console.log(location);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErr(error as any);
    }
  }

  return (
    <LocationContext.Provider
      value={{ location, isLoading, err, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
}
export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) throw new Error("Wrong Context");
  return context;
}
