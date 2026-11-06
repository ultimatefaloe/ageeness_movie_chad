import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const Task = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-xl font-bold">Task</Text>
      <Link href="/" className="text-white underline text-center p-4 mt-2">
        Link to Home
      </Link>
      <Link
        href="/(stacks)/profile"
        className="text-white underline text-center p-4 mt-2"
      >
        Link to Profile
      </Link>
    </View>
  );
};

export default Task;
