import React from "react";
import { View, Text,StyleSheet,ScrollView } from "react-native";
import Navigation from "../UI/Navigation";
import ProductUI from "../UI/ProductUI";

const Home = () => {
  return (
    <View style={styles.homePage}>
      <Navigation />
      <Text style={styles.txt}>Home page</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    homePage:{
        flex:1,
    },
    txt:{
        fontSize:50
    }
})

export default Home;
