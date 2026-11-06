import { View, Text, Image, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HeaderLogo = ({ title }) => {
  return (
    <View className="flex-row items-center">
      <Image
        source={require("../../../assets/images/berca.png")}
        className="w-8 h-8 mr-2"
        resizeMode="contain"
      />
      <Text className="text-lg font-bold text-black">{title}</Text>
    </View>
  );
};

const HeaderRight = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      hitSlop={20}
      className="flex-row items-center"
      onPress={() => router.push("/profile")}
      activeOpacity={0.7}
    >
      <FontAwesome name="user-circle-o" size={24} color="black" />
    </TouchableOpacity>
  );
};
export default function StackLayout() {
  return (
    <Stack
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "#f4511e",
    //   },
    //   headerTintColor: "#fff",
    //   headerTitleStyle: {
    //     fontWeight: "bold",
    //     color: "green",
    //   },
    // }}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: "Home",
          headerLargeTitleEnabled: true,
          headerUserInterfaceStyle: "dark",
          headerTitle: () => <HeaderLogo title="Home" />,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Stack.Screen name="profile" options={{ title: "Profile Title" }} />
      <Stack.Screen name="task" options={{ title: "Task Title" }} />
    </Stack>
  );
}
