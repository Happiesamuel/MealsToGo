import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Image } from "react-native";

export const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space.at(3)};
`;

export const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const ResturantCardCover = styled(Card.Cover)`
  background-color: white;
  border-radius: 2px;
  padding: ${(props) => props.theme.space.at(3)};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.at(2)} 0px;
`;
export const Icons = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.at(1)} 0px;
  align-items: center;
  justify-content: space-between;
`;
export const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
