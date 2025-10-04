import React from "react";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  Address,
  Icon,
  Icons,
  Info,
  Rating,
  ResturantCard,
  ResturantCardCover,
  SectionEnd,
} from "./ResturantInfoCardStyles";
import { ResturantInfo } from "../../../../model";

export default function ResturantInfoCard({
  resturant,
}: {
  resturant: ResturantInfo;
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
        <Text variant="label">{name}</Text>

        <Icons>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpeningNow && <SvgXml xml={open} width={20} height={20} />}
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Icons>

        <Address>{address}</Address>
      </Info>
    </ResturantCard>
  );
}
