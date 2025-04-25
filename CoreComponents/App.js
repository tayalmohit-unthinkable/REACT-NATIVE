import { View, Text, TouchableWithoutFeedback, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightgreen" }}
      ></View>
      <Text>
        <Text style={{ color: 'white'}}>Hello</Text> World
      </Text>
      <Image source={abc} style={{ width: 300, height: 300}}/>
      <Image source={{ uri: ''}} style={{ width: 300, height: 300}} />
      <ImageBackground source={abc} style={{ flex: 1 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}
