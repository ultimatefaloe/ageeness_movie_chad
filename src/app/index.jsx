import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  Dimensions,
  StyleSheet,
  Platform,
} from "react-native";
import { useState } from "react";

const data = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
  { id: "4", title: "Item 4" },
  { id: "5", title: "Item 5" },
];
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Index() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  console.log("Screen width:", screenWidth);
  console.log("Screen height:", screenHeight);
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-blue-500">
        <ActivityIndicator
          size="large"
          color="#ffffff"
          className="mb-2 bg-amber-800 w-fit p-2 rounded-full"
        />
        <Text className="text-white mt-2">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      // className="flex-1  bg-blue-500 p-2 pb-10"
      // contentContainerStyle={{ padding: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-xl font-bold text-red-500">
        Welcome to Movie Chad
      </Text>
      <View className="bg-amber-300 justify-center  items-center h-8 rounded-2xl">
        <Text>This is my first Text</Text>
      </View>

      <Pressable
        className="p-2 rounded-lg mt-4 bg-green-500 my-2"
        // onPress={()=> {
        //   alert("Button Pressed!");
        // }}
        onLongPress={() => {
          alert("Button Long Pressed!");
        }}
        hitSlop={20}
      >
        <Text className="text-lg font-bold text-white p-2 rounded-lg">
          Press Me
        </Text>
      </Pressable>

      <TouchableOpacity
        className="p-2 rounded-lg mt-4 bg-red-500 my-2"
        activeOpacity={0.5}
        onPress={() => {
          alert("TouchableOpacity Pressed!");
        }}
      >
        <Text className="text-lg font-bold text-white p-2 rounded-lg ">
          TouchableOpacity Button
        </Text>
      </TouchableOpacity>

      {/* Display Loading Indicator */}
      <TouchableOpacity
        className="p-2 rounded-lg mt-4 bg-orange-500 my-2"
        activeOpacity={0.5}
        onPress={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000); // Simulate a 3-second loading time
        }}
      >
        <Text className="text-lg font-bold text-white p-2 rounded-lg ">
          Display Loading Indicator
        </Text>
      </TouchableOpacity>

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

      {/* <FlatList
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
      /> */}

      <TouchableOpacity
        className="p-2 rounded-lg mt-4 bg-purple-500 my-2"
        activeOpacity={0.5}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text className="text-lg font-bold text-white p-2 rounded-lg ">
          Show Modal
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Modal Title</Text>
              <Pressable
                onPress={() => setModalVisible(false)}
                className="rounded-lg bg-gray-200 p-2"
                hitSlop={10}
              >
                <Text className="text-lg text-blue-500">Close</Text>
              </Pressable>
            </View>
            <View className="">
              <Text className="text-lg">Modal Content</Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "ios" ? 20 : 10, // Adjust padding based on platform
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "lightblue" : "lightgreen", // Set the background color to blue
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: screenWidth * 1, // 80% of the screen width
    height: screenHeight * 0.4, // 40% of the screen height
  },
});
