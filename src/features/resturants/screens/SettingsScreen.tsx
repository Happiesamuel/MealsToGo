import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/utility/safe-area.component";
import { Button } from "react-native-paper";
import { useAuth } from "../../../services/auth/AuthContext";

export default function SettingsScreen() {
  const { onLogout } = useAuth();
  return (
    <SafeArea>
      <Text>SettingsScreen</Text>
      <Button onPress={() => onLogout()} mode="contained">
        Logout
      </Button>
    </SafeArea>
  );
}
