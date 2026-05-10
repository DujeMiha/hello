import React from "react";
import { View, Text } from "react-native";

const Color = ({ route }) => {
  console.log(route.params);
  const { hexCode, colorName } = route.params;

  const textStyle = {
    color:
      parseInt(hexCode.replace("#", ""), 16) > 0xffffff / 1.2
        ? "black"
        : "white",
  };

  return (
    <View
      style={{
        backgroundColor: hexCode,
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={[textStyle, { fontSize: 50, textAlign: "center" }]}>
        {colorName}
      </Text>
    </View>
  );
};

export default Color;
