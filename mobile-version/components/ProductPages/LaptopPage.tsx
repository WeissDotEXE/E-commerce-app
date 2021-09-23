import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList, Button } from "react-native";
import ProductUI from "../UI/ProductUI";
import Navigation from "../UI/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const LaptopPage = () => {
  const [laptops, setLaptops] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const reduxTest = useSelector((state) => state.cart.totalProducts);
  const fetchDataHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/products/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      setLaptops(
        data.filter((laptop) => {
          return laptop.category === "laptop";
        })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <View style={styles.laptopPage}>
      <ScrollView>
        <Text>{reduxTest}</Text>
        <Button title="press" onPress={()=>fetchDataHandler()}/>
      </ScrollView>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  laptopPage: {
    flex: 1,
  },
});

export default LaptopPage;
