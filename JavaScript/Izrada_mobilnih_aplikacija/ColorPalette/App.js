import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./ekrani/Home";
import Palette from "./ekrani/Palette";
import Color from "./ekrani/Color";
import Login from "./ekrani/Login";
import Register from "./ekrani/Register";
import { StackScreen } from "react-native-screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Palette" component={Palette} />
        <Stack.Screen name="Color" component={Color} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
