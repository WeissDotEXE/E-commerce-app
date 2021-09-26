import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList, Button } from "react-native";
import ProductUI from "../UI/ProductUI";
import Navigation from "../UI/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const LaptopPage = () => {
  const [laptops, setLaptops] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const reduxTest = useSelector((state:RootStateOrAny) => state.cart.totalProducts);
  const fetchDataHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://0ce3-2a02-2f04-c113-2500-f073-47b4-7c8f-5337.ngrok.io/products/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setLaptops(
        data.filter((laptop: any) => {
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
  }, []);

  return (
    <View style={styles.laptopPage}>
      <ScrollView>
        {laptops?.map((laptop: any) => (
          <ProductUI
            key={laptop._id}
            id={laptop._id}
            name={laptop.name}
            price={laptop.price}
            image={laptop.image}
          />
        ))}
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
