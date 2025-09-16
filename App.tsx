
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useState } from "react";
import ResturantScreen from "./src/features/resturants/screens/ResturantScreen";
export default function App() {
  return (
    <>
      <ResturantScreen />
      <ExpoStatusBar style="dark" />
    </>
  );
}

