import React from "react";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image } from "react-native";
interface ResturantInfoCard {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpeningNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
}

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;
const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space.at(3)};
`;

const ResturantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const ResturantCardCover = styled(Card.Cover)`
  background-color: white;
  border-radius: 2px;
  padding: ${(props) => props.theme.space.at(3)};
`;
const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.at(2)} 0px;
`;
const Icons = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space.at(1)} 0px;
  align-items: center;
  justify-content: space-between;
`;
const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export default function ResturantInfoCard({
  resturant,
}: {
  resturant: ResturantInfoCard;
}) {
  const {
    name,
    icon,
    photos,
    address,
    isOpeningNow,
    rating,
    isClosedTemporarily,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos.at(0) }} />
      <Info>
        <Title>{name}</Title>

        <Icons>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
            )}
            {isOpeningNow && <SvgXml xml={open} width={20} height={20} />}
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Icons>

        <Address>{address}</Address>
      </Info>
    </ResturantCard>
  );
}
