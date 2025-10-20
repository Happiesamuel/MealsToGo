import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "./AccountStyles";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <AccountBackground resizeMode="cover">
    <AccountCover />
    <AccountContainer>{children}</AccountContainer>
  </AccountBackground>
);

export default Layout;
