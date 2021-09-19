import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import ProductUI from "../UI/ProductUI";

const LaptopPage: React.FC = () => {

    interface Laptop{
        id:string;
        name:string;
        price:number;
        image:number;
    }[]

  const [laptops, setLaptops] = useState<Laptop | undefined>();
  const [isLoading, setIsLoading] = useState(false);

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

  return(
      <View>
          <Text>Laptop Page</Text>
      </View>
  )

};

export default LaptopPage;
