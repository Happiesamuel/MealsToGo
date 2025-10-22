import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function FadeInView({ duration = 1500, ...props }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(
    function () {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
    },
    [fadeAnim, duration]
  );
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}
