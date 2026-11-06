import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-xl font-bold">Profile</Text>

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

export default Profile;
