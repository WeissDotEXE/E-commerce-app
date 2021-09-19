import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LaptopPage from "./components/ProductPages/LaptopPage";
import ProductUI from "./components/UI/ProductUI";

export default function App() {
  return (
    <View style={styles.container}>
      <LaptopPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
