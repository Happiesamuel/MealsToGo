import React, { useState } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../../../services/auth/AuthContext";
import {
  AccountButton,
  AuthInput,
  ErrorContainer,
} from "../components/AccountStyles";
import { Text } from "../../../components/typography/text.component";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, isLoading, error } = useAuth();

  async function register() {
    if (!email || !password || !confirmPassword) return;
    await onRegister(email, password, confirmPassword);
  }
  return (
    <Layout screen="Register">
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
      <AuthInput
        value={confirmPassword}
        label={"Confirm Password"}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {error && (
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      <AccountButton
        mode="contained"
        onPress={register}
        loading={isLoading}
        disabled={isLoading}
        icon={"email"}
      >
        {isLoading ? "Please wait..." : "Register"}
      </AccountButton>
    </Layout>
  );
}
