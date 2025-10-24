import CreditCard from "../../checkout/CreditCard";
import { SafeArea } from "../components/utility/safe-area.component";
import { useCart } from "../../../services/cart/CartContext";
import ResturantInfoCard from "../components/ResturantInfoCard";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Avatar, Button, List, TextInput } from "react-native-paper";
import { ScrollView } from "react-native";
import { useState } from "react";
import { colors } from "../../../infrastructure/theme/colors";

const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 16px;
`;
const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space.at(3)};
  margin-bottom: 20px;
`;

const PayButton = styled(Button).attrs({})`
  align-self: center;
  width: 80%;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.brand.primary};
`;
const ClearButton = styled(Button).attrs({})`
  align-self: center;
  width: 80%;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.ui.error};
`;

const ButtonContainer = styled.View`
  gap: 6px;
  padding: 20px 0px;
`;
export default function Checkout() {
  const { cart, resturant, sum, clearCart } = useCart();
  const [name, setName] = useState<string | null>(null);

  if (!resturant || !cart.length)
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text variant="label">Your cart is empty!</Text>
        </CartIconContainer>
      </SafeArea>
    );
  return (
    <SafeArea>
      <ResturantInfoCard resturant={resturant} />
      <ScrollView style={{ padding: 6 }}>
        <Text>Your Order</Text>
        <List.Section>
          {cart.map(({ item, price }, i) => (
            <List.Item key={i} title={`${item}-${price / 100}`} />
          ))}
        </List.Section>
        <Text>Total: {sum / 100}</Text>
        <NameInput
          label="Name"
          value={name || ""}
          onChangeText={(text) => setName(text)}
        />
        {name && <CreditCard name={name} />}
        <ButtonContainer>
          <PayButton icon="cash" mode="contained">
            Pay
          </PayButton>
          <ClearButton
            onPress={() => clearCart()}
            icon="cart-off"
            mode="contained"
          >
            Clear Cart
          </ClearButton>
        </ButtonContainer>
      </ScrollView>
    </SafeArea>
  );
}
