import { createContext, useContext, useEffect, useState } from "react";
import { ResturantInfo } from "../../../model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginRequest, logoutRequest, registerRequest } from "./AuthService";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../Firebase";

interface UserCredential {
  user: User; // 👈 this is the actual Firebase user
  providerId: string | null;
  operationType: string;
}

const defaultValue = {
  user: null,
  isLoading: false,
  error: null,
  onLogin: () => {},
  onRegister: () => {},
  onLogout: () => {},
  isAuthenicated: false,
};

const AuthContext = createContext<{
  isLoading: boolean;
  user: null | User;
  error: string | null;
  onLogin(email: string, password: string): void;
  onLogout(): void;
  onRegister(email: string, password: string, repeatedPasword: string): void;
  isAuthenicated: boolean;
}>(defaultValue);
export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<null | string>(null);

  async function onLogin(email: string, password: string) {
    try {
      setIsLoading(true);
      const req = await loginRequest(email, password);
      setUser(req.user);
      setIsLoading(false);
    } catch (error) {
      const err = error as Error;
      setIsLoading(false);
      setError(err.message);
    }
  }
  useEffect(() => {
    const auths = auth;
    const unsubscribe = onAuthStateChanged(auths, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);
  async function onRegister(
    email: string,
    password: string,
    repeatedPassword: string
  ) {
    try {
      if (password !== repeatedPassword) {
        throw new Error("Error: Password do not match ");
      }
      setIsLoading(true);
      const req = await registerRequest(email, password);
      setUser(req.user);
      setIsLoading(false);
    } catch (error) {
      const err = error as Error;
      setIsLoading(false);
      setError(err.message);
    }
  }
  async function onLogout() {
    try {
      setUser(null);
      logoutRequest();
    } catch (error) {
      // const err = error as Error;
      console.log(error);
      // setError(err.message);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenicated: !!user,
        onRegister,
        onLogout,
      }}
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
