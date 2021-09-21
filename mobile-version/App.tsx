import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LaptopPage from "./components/ProductPages/LaptopPage";
import ProductUI from "./components/UI/ProductUI";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home/Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Laptops" component={LaptopPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
