declare module "stripe-client" {
  interface StripeClient {
    createToken: (data: any) => Promise<any>;
  }

  export default function createStripe(apiKey: string): StripeClient;
}
