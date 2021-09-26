import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { RootStateOrAny, useSelector } from "react-redux";
import Navigation from "../UI/Navigation";

const CartPage: React.FC = () => {
  const [productList, setProductList] = useState(
    useSelector((state: RootStateOrAny) => state.cart.cartProducts)
  );
  const [totalPrice, setTotalPrice] = useState(
    useSelector((state: RootStateOrAny) => state.cart.totalPrice)
  );
  const totalCart = useSelector(
    (state: RootStateOrAny) => state.cart.totalProducts
  );

  let content = null;

  return (
    <LinearGradient style={styles.cartPage} colors={["#7303C0", "03001E"]}>
      {productList.length === 0 && (
        <Text style={styles.noProductsTxt}>
          You don't have any product in cart
        </Text>
      )}
      {productList.length > 0 && (
        <View style={styles.header}>
          <Text style={styles.headerTxtColor}>YOUR CART</Text>
          <Text style={styles.headerTxt}>{totalCart} Products</Text>
          <Text style={styles.headerTxt}>{totalPrice} $</Text>
        </View>
      )}
      <Navigation />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cartPage: {
    flex: 1,
    backgroundColor: "black",
  },
  noProductsTxt: {
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  header:{

  },
  headerTxt: {
    color: "white",
    textAlign: "center",
  },
  headerTxtColor: {
    color: "#EC38BC",
    textAlign: "center",
    fontSize: 30,
  },
});

export default CartPage;
