import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import ProductUI from "../UI/ProductUI";
import Navigation from "../UI/Navigation";
import { ScrollView } from "react-native-gesture-handler";

const LaptopPage = () => {
  const [laptops, setLaptops] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/products/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setLaptops(data);
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
        {laptops.map((laptop:any)=><ProductUI key={laptop._id} id={laptop._id} name={laptop.name} price={laptop.price} image={laptop.image}/>)}
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
