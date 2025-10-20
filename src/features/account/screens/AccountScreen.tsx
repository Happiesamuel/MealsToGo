import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { AccountButton } from "../components/AccountStyles";

export default function AccountScreen() {
  const navigation = useNavigation();
  return (
    <Layout>
      <AccountButton
        mode="contained"
        onPress={() => (navigation as any).navigate("Login")}
        icon={"lock-open-outline"}
      >
        Login
      </AccountButton>
      <AccountButton
        mode="contained-tonal"
        icon={"email"}
        onPress={() => (navigation as any).navigate("Register")}
      >
        Register
      </AccountButton>
    </Layout>
  );
}
