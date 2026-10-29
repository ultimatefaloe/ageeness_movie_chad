import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
];

export default function Index() {
  const [text, setText] = useState("");

  return (
    <ScrollView
      className="flex-1  bg-blue-500 p-2"
      // contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-xl font-bold text-red-500">
        Welcome to Movie Chad
      </Text>
      <View className="bg-amber-300 justify-center  items-center h-8 rounded-2xl">
        <Text>This is my first Text</Text>
      </View>

      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KjrrP4ChUVzOxfkPzRRdcjuzsKynxx_IXbhzE3kuVw&s=10",
          }}
          className="h-100 w-50"
          width={100}
          height={100}
        />
        <Image
          source={require("../../assets/images/berca.png")}
          className="h-25 w-25"
          width={100}
          height={100}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KjrrP4ChUVzOxfkPzRRdcjuzsKynxx_IXbhzE3kuVw&s=10",
          }}
          className="h-100 w-50"
          width={100}
          height={100}
        />
        <Image
          source={require("../../assets/images/berca.png")}
          className="h-25 w-25"
          width={100}
          height={100}
        />
      </View>
      <View>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KjrrP4ChUVzOxfkPzRRdcjuzsKynxx_IXbhzE3kuVw&s=10",
          }}
          className="h-100 w-50"
          width={100}
          height={100}
        />
        <Image
          source={require("../../assets/images/berca.png")}
          className="h-25 w-25"
          width={100}
          height={100}
        />
      </View>

      <View className="p-2 w-full">
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type here"
          placeholderTextColor="blue"
          className="bg-white h-10 w-full px-3 py-2 rounded-xl"
          keyboardType="default"
          secureTextEntry={false}
          returnKeyType="next"
          onSubmitEditing={() => {
            console.log("Submitted text:", text);
            setText(""); // Clear the text input after submission
          }}
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 m-2 rounded-lg">
            <Text className="text-lg font-semibold">{item.title}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View className="h-2 bg-amber-500" />}
        ListHeaderComponent={() => (
          <View className="bg-gray-200 p-4">
            <Text className="text-lg font-bold">List Header</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View className="bg-gray-200 p-4">
            <Text className="text-lg font-bold">List Footer</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="bg-gray-200 p-4">
            <Text className="text-lg font-bold">No items available</Text>
          </View>
        )}
        // numColumns={2}
        horizontal={true}
      />
    </ScrollView>
  );
}
