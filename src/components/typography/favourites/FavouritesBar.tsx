import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { ResturantInfo } from "../../../../model";
import styled from "styled-components/native";
import CompactResturantInfo from "../../../features/resturants/components/CompactResturantInfo";
import { Text } from "../text.component";

const FavouriteWrapper = styled.View`
  padding: 10px;
`;
const FavouriteGap = styled.View`
  gap: 10px;
  flex-direction: row;
`;
export default function FavouritesBar({
  favourites,
  onDetail,
}: {
  favourites: ResturantInfo[];
  onDetail(res: string, { resturant }: { resturant: ResturantInfo }): void;
}) {
  return (
    <FavouriteWrapper>
      <Text variant="caption">Favourites</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <FavouriteGap>
          {favourites.map((res) => (
            <TouchableOpacity
              key={res.name}
              onPress={() => onDetail("ResturantDetail", { resturant: res })}
            >
              <CompactResturantInfo resturant={res} isMap={false} />
            </TouchableOpacity>
          ))}
        </FavouriteGap>
      </ScrollView>
    </FavouriteWrapper>
  );
}
