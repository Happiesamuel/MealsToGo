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
import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const AnimationWrapper = styled.View`
  width: 100%;
  position: absolute;
  top: 30px;
  height: 40%;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space.at(2)};
`;
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
      {screen === "Account" && (
        <AnimationWrapper>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            style={{
              width: 300,
              height: 300,
            }}
            source={require("../../../../assets/Watermelon.json")}
          />
        </AnimationWrapper>
      )}
      <AccountContent>
        <Title variant="label">Meals To Go</Title>
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
