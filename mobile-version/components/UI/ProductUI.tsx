import React, { useState, useEffect } from "react";
import {StyleSheet, Text, Image, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Product from "../../models/productItem";
const ProductUI: React.FC<Product> = (props) => {
  return (
    <LinearGradient
      colors={["#1B1A17", "#7303C0", "#EC38BC"]}
      style={styles.productItem}
    >
      <Image source={{ uri: props.image }} style={styles.productImage} />
      <Text style={styles.baseText}>{props.name}</Text>
      <Text style={styles.baseText}>{props.price}</Text>
      {/* <Button style={styles.addCartBtn} title="add to cart"></Button> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  productItem: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:15
  },
  baseText: {
    color: "white",
    textAlign: "center",
  },
  productImage: {
    height: 100,
    width: 200,
    resizeMode: "cover",
    margin:20,
    padding:20
  },
  addCartBtn:{
      color:'white',
      borderRadius:15
  }
});

export default ProductUI;

