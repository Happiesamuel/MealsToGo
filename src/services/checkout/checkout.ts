import { Card } from "@stripe/stripe-react-native/lib/typescript/src/types/Token";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51SLLqQGYpMuBSUAnbpXJUtTXOCsowxY4aoUTTpnPENijDDjJq6FqgHnYJfm7RyuMlyLD9siXpgjBwykyxP0O4J9c00G7vhLhrE"
);

export const cardTokenRequest = (card: { [key: string]: string }) =>
  stripe.createToken({ card });
