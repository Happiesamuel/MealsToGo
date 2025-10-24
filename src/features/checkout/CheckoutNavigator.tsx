import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Checkout from "../resturants/screens/Checkout";
import CheckoutSuccess from "./CheckoutSuccess";
import CheckoutError from "./CheckoutError";
const CheckoutStack = createStackNavigator();
export default function CheckoutNavigator() {
  return (
    <CheckoutStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <CheckoutStack.Screen name="Checkout" component={Checkout} />
      <CheckoutStack.Screen
        name="CheckoutSuccess"
        component={CheckoutSuccess}
      />
      <CheckoutStack.Screen name="CheckoutError" component={CheckoutError} />
    </CheckoutStack.Navigator>
  );
}
