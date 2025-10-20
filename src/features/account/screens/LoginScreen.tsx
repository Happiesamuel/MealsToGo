import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../../../services/auth/AuthContext";
import {
  AccountButton,
  AuthInput,
  ErrorContainer,
} from "../components/AccountStyles";
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
    <Layout screen="Login">
      <AuthInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        textContentType="emailAddress"
        keyboardType="email-address"
        secureTextEntry
        autoCapitalize="none"
      />
      <AuthInput
        value={password}
        label={"Password"}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
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
