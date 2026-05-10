import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./ekrani/Home";
import Palette from "./ekrani/Palette";
import Color from "./ekrani/Color";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Palette" component={Palette} />
        <Stack.Screen name="Color" component={Color} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
