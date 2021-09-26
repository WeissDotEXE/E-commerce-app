import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LaptopPage from "./components/ProductPages/LaptopPage";
import ProductUI from "./components/UI/ProductUI";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home/Home";
import { Provider } from "react-redux";
import store from "./store";
import smartphonePage from "./components/ProductPages/SmartphonePage";
import CartPage from "./components/Cart/CartPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Laptops" component={LaptopPage} />
          <Stack.Screen name="Smartphones" component={smartphonePage} />
          <Stack.Screen name="Cart" component={CartPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
