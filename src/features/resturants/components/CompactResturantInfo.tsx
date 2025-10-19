import React, { ComponentType } from "react";
import { ResturantInfo } from "../../../../model";
import { Platform, View } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export default function CompactResturantInfo({
  resturant,
  isMap,
}: {
  resturant: ResturantInfo;
  isMap: boolean;
}) {
  const Images = (
    isAndroid && isMap ? CompactWebview : CompactImage
  ) as ComponentType<any>;
  return (
    <Item>
      <Images source={{ uri: resturant.photos.at(0) }} />
      <Text variant="caption" numberOfLines={3}>
        {resturant.name}
      </Text>
    </Item>
  );
}
