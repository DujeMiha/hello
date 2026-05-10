import react from "react";
import { View, Text } from "react-native";

const ColorBox = ({ colorName, hexCode }) => {
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
        height: 60,
        marginBottom: 5,
        marginLeft: 20,
        justifyContent: "flex-end",
        alignContent: "flex-start",
      }}
    >
      <Text style={textStyle}>{colorName}</Text>
    </View>
  );
};

export default ColorBox;
