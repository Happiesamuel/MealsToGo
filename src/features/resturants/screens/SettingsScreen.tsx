import { View } from "react-native";
import React from "react";
import { SafeArea } from "../components/utility/safe-area.component";
import { Avatar, Button, List } from "react-native-paper";
import { useAuth } from "../../../services/auth/AuthContext";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.at(3)};
`;
const AvatarContainer = styled.View`
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;
export default function SettingsScreen() {
  const { onLogout, user } = useAuth();
  const navigation = useNavigation();
  return (
    <SafeArea>
      <AvatarContainer>
        {" "}
        <Avatar.Icon
          icon="human"
          style={{ backgroundColor: "#2182bd", borderRadius: "100%" }}
          size={180}
        />
        <Text variant="label">{user?.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          onPress={() => (navigation as any).navigate("Favourites")}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
        />
      </List.Section>
    </SafeArea>
  );
}
