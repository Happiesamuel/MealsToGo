import { View, Text } from "react-native";
import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import CreditCard from "../../checkout/CreditCard";
import { SafeArea } from "../components/utility/safe-area.component";

export default function Checkout() {
  return (
    <SafeArea>
      <CreditCard name="Hs" />
    </SafeArea>
  );
}
