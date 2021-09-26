import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList, Button } from "react-native";
import ProductUI from "../UI/ProductUI";
import Navigation from "../UI/Navigation";
import { ScrollView } from "react-native-gesture-handler";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const smartphonePage = () => {
  const [smartphones, setsmartphones] = useState();
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
      setsmartphones(
        data.filter((smartphone: any) => {
          return smartphone.category === "smartphone";
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
    <View style={styles.smartphonePage}>
      <ScrollView style={styles.test}>
        {smartphones?.map((smartphone: any) => (
          <ProductUI
            key={smartphone._id}
            id={smartphone._id}
            name={smartphone.name}
            price={smartphone.price}
            image={smartphone.image}
          />
        ))}
      </ScrollView>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  smartphonePage: {
    flex: 1,
  },
  test:{
      flex:1,
      flexDirection:'column'
  }
});

export default smartphonePage;
