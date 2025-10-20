import React from "react";
import {
  AccountBackground,
  AccountButton,
  AccountContainer,
  AccountContent,
  AccountCover,
  Title,
} from "./AccountStyles";
import { useNavigation } from "@react-navigation/native";

const Layout = ({
  children,
  screen,
}: {
  children: React.ReactNode;
  screen: string;
}) => {
  const navigation = useNavigation();
  return (
    <AccountBackground resizeMode="cover">
      <AccountCover />
      <AccountContent>
        <Title>Meals To Go</Title>
        <AccountContainer>{children}</AccountContainer>
        {screen !== "Account" && (
          <AccountButton mode="contained" onPress={() => navigation.goBack()}>
            Back{" "}
          </AccountButton>
        )}
      </AccountContent>
    </AccountBackground>
  );
};

export default Layout;
