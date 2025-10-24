import { View, Text } from "react-native";
import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import CreditCard from "../../checkout/CreditCard";
import { SafeArea } from "../components/utility/safe-area.component";
import { useCart } from "../../../services/cart/CartContext";
import ResturantInfoCard from "../components/ResturantInfoCard";

export default function Checkout() {
  const { cart, resturant } = useCart();
  console.log(cart, resturant);

  if (!resturant)
    return (
      <SafeArea>
        <Text>No cart</Text>
      </SafeArea>
    );
  return (
    <SafeArea>
      <ResturantInfoCard resturant={resturant} />
      <CreditCard name="Hs" />
    </SafeArea>
  );
}
