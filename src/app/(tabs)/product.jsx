import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

const Product = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-xl font-bold">Product</Text>

      <Link href="/" className="text-white underline text-center p-4 mt-2">
        Link to Home
      </Link>
      <Link
        href="/(stacks)/task"
        className="text-white underline text-center p-4 mt-2"
      >
        Link to Task
      </Link>
    </View>
  );
};

export default Product;
