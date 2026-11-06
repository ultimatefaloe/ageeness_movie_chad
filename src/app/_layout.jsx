import { Stack } from "expo-router";
import React from "react";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "tabs", headerShown: false }}
      />
      <Stack.Screen
        name="(stacks)"
        options={{ title: "stacks", headerShown: false }}
      />
    </Stack>
  );
};