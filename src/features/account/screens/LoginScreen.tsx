import React, { useState } from "react";
import Layout from "../components/Layout";
import { TextInput } from "react-native-paper";
import { useAuth } from "../../../services/auth/AuthContext";
import { AccountButton } from "../components/AccountStyles";
import { Text } from "../../../components/typography/text.component";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, isLoading, error } = useAuth();
  async function login() {
    if (!email || !password) return;
    await onLogin(email, password);
  }
  return (
    <Layout>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
        keyboardType="email-address"
        secureTextEntry
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        label={"Password"}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      {error && <Text variant="error">{error}</Text>}
      <AccountButton
        mode="contained"
        onPress={login}
        loading={isLoading}
        disabled={isLoading}
        icon={"lock-open-outline"}
      >
        {isLoading ? "Please wait..." : "Login"}
      </AccountButton>
    </Layout>
  );
}
