import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const Navigation = () => {
  const navigation: any = useNavigation();

  const totalCart = useSelector((state) => state.cart.totalProducts);

  return (
    <LinearGradient
      colors={["#EC38BC", "#7303C0", "#03001E"]}
      style={styles.navigation}
    >
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="home" size={24} color="white" />
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Laptops")}
      >
        <AntDesign name="laptop" size={24} color="white" />
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Laptops")}
      >
        <Feather name="smartphone" size={24} color="white" />
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Laptops")}
      >
        <AntDesign name="shoppingcart" size={24} color="white" />
        <Text style={styles.cartNumber}>{totalCart}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#EC38BC",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 5,
  },
  link: {
    padding: 10,
  },
  textLink: {
    color: "white",
    fontSize: 16,
  },
  cartNumber:{
    position:'absolute',
    top:2,
    left:30,
    backgroundColor:'black',
    borderRadius:12,
    padding:5,
    fontSize:20,
    color:'white'
  }
});

export default Navigation;
