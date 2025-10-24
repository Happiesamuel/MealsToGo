import { SafeArea } from "../resturants/components/utility/safe-area.component";
import styled from "styled-components/native";
import { Avatar } from "react-native-paper";
import { Text } from "../../components/typography/text.component";
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
export default function CheckoutSuccess() {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
}
