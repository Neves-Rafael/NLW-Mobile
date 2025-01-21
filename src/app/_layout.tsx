import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../styles/global.css";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_900Black,
} from "@expo-google-fonts/rubik";
import { Loading } from "../components/loading";
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_900Black,
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {fontsLoaded ? <Slot /> : <Loading />}

      <StatusBar style="dark" translucent />
    </GestureHandlerRootView>
  );
}
