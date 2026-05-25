import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import ColorBox from "../komponente/ColorBox";
import { Alert } from "react-native";

const Palette = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("http://demo9256741.mockable.io/ColorPalette")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setColors(data);
      })
      .catch((greska) => {
        Alert.alert("Greska", greska.message);
      });
  }, []);

  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Color", {
              hexCode: item.hexCode,
              colorName: item.colorName,
            })
          }
        >
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        </TouchableOpacity>
      )}
    />
  );
};

export default Palette;
