import { Text, View } from "react-native";
import { useAuth } from "../../services/auth/AuthContext";
import AppNavigation from "./AppNavigation";
import AccountNavigation from "./AccountNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
  const { isAuthenicated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenicated ? <AppNavigation /> : <AccountNavigation />};
    </NavigationContainer>
  );
}
