import { View, Text } from "react-native";
import React, { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { SafeArea } from "../components/utility/safe-area.component";
import { ResturantInfo } from "../../../../model";
import ResturantInfoCard from "../components/ResturantInfoCard";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

type ResturantDetailRouteProp = RouteProp<
  {
    Resturant: undefined;
    ResturantDetail: { resturant: ResturantInfo };
  },
  "ResturantDetail"
>;
export default function ResturantDetailScreen() {
  const route = useRoute<ResturantDetailRouteProp>();
  const { resturant } = route.params;
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeArea>
      <ScrollView>
      <ResturantInfoCard resturant={resturant} />
        {" "}
        <List.Section title="Accordions">
          <List.Accordion
            title="Uncontrolled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Controlled Accordion"
            left={(props) => <List.Icon {...props} icon="folder" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
}
