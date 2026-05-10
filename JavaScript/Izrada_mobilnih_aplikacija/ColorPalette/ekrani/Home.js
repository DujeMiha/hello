import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Palette")}>
        <Text style={{ textAlign: "center", fontSize: 50 }}>Rainbow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
