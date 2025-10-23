import { TouchableOpacity } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import { Avatar, List } from "react-native-paper";
import { useAuth } from "../../../services/auth/AuthContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "firebase/auth";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space.at(3)};
`;
const AvatarContainer = styled.View`
  align-items: center;
  gap: 10px;
  margin-top: 30px;
`;

export type ResturantStackParamList = {
  Camera: undefined;
};

export default function SettingsScreen() {
  const navigation =
    useNavigation<StackNavigationProp<ResturantStackParamList, "Camera">>();
  const [photo, setPhoto] = useState<string | null>(null);
  const { onLogout, user } = useAuth();
  async function getProfilePic(current: User | null) {
    if (!current) return;
    const photoUri = await AsyncStorage.getItem(`${current.uid}-photo`); // ✅ await the Promise
    setPhoto(photoUri);
  }
  useFocusEffect(
    useCallback(() => {
      getProfilePic(user);
    }, [user])
  );
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon
              icon="human"
              style={{ backgroundColor: "#2182bd", borderRadius: "100%" }}
              size={180}
            />
          ) : (
            <Avatar.Image
              style={{ backgroundColor: "#2182bd", borderRadius: "100%" }}
              source={{ uri: photo }}
              size={180}
            />
          )}
        </TouchableOpacity>
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
