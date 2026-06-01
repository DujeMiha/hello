import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import {
  dugmad,
  dugmadRaspored,
  dugmadSlova,
  naslov,
  podnaslov,
  pozadina,
  textBox,
} from "../style";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registracija = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        Alert.alert("Greska", error.message);
      });
  };

  return (
    <View style={pozadina}>
      <Text style={naslov}>REGISTRACIJA</Text>

      <Text style={podnaslov}> Email</Text>
      <TextInput
        placeholder="Unesite email"
        value={email}
        onChangeText={(tekst) => setEmail(tekst)}
        style={textBox}
      />
      <Text style={podnaslov}>Password</Text>
      <TextInput
        placeholder="Unesite password"
        secureTextEntry={true}
        value={password}
        onChangeText={(tekst) => setPassword(tekst)}
        style={textBox}
      />
      <View style={dugmadRaspored}>
        <TouchableOpacity onPress={registracija} style={dugmad}>
          <Text style={dugmadSlova}>Registriraj se</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace("Login")}
          style={dugmad}
        >
          <Text style={dugmadSlova}>Prijavi se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
