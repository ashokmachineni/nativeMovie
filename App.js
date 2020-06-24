import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  Provider as PaperProvider,
  DarkTheme,
  DefaultTheme
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
