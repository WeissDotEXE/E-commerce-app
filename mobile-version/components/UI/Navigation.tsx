import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Navigation = () => {

  const navigation:any=useNavigation()

  return (
    <View style={styles.navigation}>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate('Home')}
      >
        <AntDesign name="home" size={24} color="white" />
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate('Laptops')}
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
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent:'center',
    alignItems: "center",
  },
  link: {
    backgroundColor: "black",
    padding: 10,
  },
  textLink: {
    color: "white",
    fontSize: 16,
  },
});

export default Navigation;
