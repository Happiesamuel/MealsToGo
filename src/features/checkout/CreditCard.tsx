import { View, Text } from "react-native";
import React from "react";
import {
  CreditCardFormData,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import { cardTokenRequest } from "../../services/checkout/checkout";

export default function CreditCard({ name = "Hs" }: { name: string }) {
  async function onChange(formData: CreditCardFormData) {
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const [mon, yr] = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: mon,
      exp_year: yr,
      cvc: values.cvc,
      name: name,
    };
    const info = await cardTokenRequest(card);
    console.log(info);
  }
  return (
    <View>
      <LiteCreditCardInput onChange={onChange} />
    </View>
  );
}
