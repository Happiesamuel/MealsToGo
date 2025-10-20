import { createContext, useContext, useEffect, useState } from "react";
import { ResturantInfo } from "../../../model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest } from "./AuthService";
import { UserCredential } from "firebase/auth";

const defaultValue = {
  user: null,
  isLoading: false,
  error: null,
  onLogin: () => {},
  isAuthenicated: false,
};

const AuthContext = createContext<{
  isLoading: boolean;
  user: null | UserCredential;
  error: string | null;
  onLogin(email: string, password: string): void;
  isAuthenicated: boolean;
}>(defaultValue);
export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserCredential | null>(null);
  const [error, setError] = useState<null | string>(null);

  async function onLogin(email: string, password: string) {
    try {
      setIsLoading(true);
      const req = await loginRequest(email, password);
      setUser(req);
      setIsLoading(false);
    } catch (error) {
      const err = error as Error;
      setIsLoading(false);
      setError(err.message);
    }
  }
  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, onLogin, isAuthenicated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Wrong Context");
  return context;
}
