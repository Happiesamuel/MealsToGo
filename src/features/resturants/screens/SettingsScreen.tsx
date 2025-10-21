import { View, Text } from "react-native";
import React from "react";
import { SafeArea } from "../components/utility/safe-area.component";
import { Button, List } from "react-native-paper";
import { useAuth } from "../../../services/auth/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function SettingsScreen() {
  const { onLogout } = useAuth();
  const navigation = useNavigation();
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          onPress={() => (navigation as any).navigate("Favourites")}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
        />
      </List.Section>
    </SafeArea>
  );
}
