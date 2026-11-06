import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-xl font-bold">Account</Text>

      <Link href="/" className="text-white underline text-center p-4 mt-2">
        Link to Home
      </Link>
      <Link href="/task" className="text-white underline text-center p-4 mt-2">
        Link to Task
      </Link>
    </View>
  );
};

export default Index;
