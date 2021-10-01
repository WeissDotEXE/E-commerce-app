import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, Button, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Product from "../../models/productItem";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductUI: React.FC<Product> = (props) => {
  const dispatch = useDispatch();
  const { name, price, image,id } = props;
  const [product, setProduct] = useState({});
  const addToCartHandler = (): void => {
    setProduct({
      id,
      name,
      price,
      image,
    });
    dispatch(cartActions.addItemToCart(product));
  };

  return (
    <LinearGradient
      colors={["#1B1A17", "#7303C0", "#EC38BC"]}
      style={styles.productItem}
    >
      <Image source={{ uri: image }} style={styles.productImage} />
      <Text style={styles.baseText}>{name}</Text>
      <Text style={styles.baseText}>{price} $</Text>
      <Pressable onPress={addToCartHandler} style={styles.addCartBtn}>
        <Text style={styles.btnTxt}>Add to cart</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  productItem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: 200,
  },
  baseText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    margin: 5,
  },
  productImage: {
    height: 120,
    width: 120,
    resizeMode: "cover",
    margin: 20,
    padding: 20,
    resizeMode: "contain",
    borderRadius:20,
  },
  addCartBtn: {
    backgroundColor: "black",
    borderRadius: 10,
  },
  btnTxt: {
    color: "white",
    padding: 8,
  },
});

export default ProductUI;
