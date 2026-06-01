import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./ekrani/Login";
import Register from "./ekrani/Register";
import Home from "./ekrani/Home";
import DodajZadatak from "./ekrani/DodajZadatak";
import EditZadatak from "./ekrani/EditZadatak";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DodajZadatak" component={DodajZadatak} />
        <Stack.Screen name="EditZadatak" component={EditZadatak} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
