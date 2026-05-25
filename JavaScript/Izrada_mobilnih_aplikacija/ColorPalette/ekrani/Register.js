import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

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

  const stil = {
    input: {
      borderWidth: 2,
      marginTop: 10,
      marginBottom: 12,
      marginLeft: 20,
      marginRight: 20,
    },
    naslov: {
      fontWeight: "bold",
      backgroundColor: "yellow",
      marginBottom: 20,
      borderBottomWidth: 5,
      textAlign: "center",
      fontSize: 50,
    },
    naslov2: {
      marginLeft: 50,
      fontSize: 25,
    },
  };

  return (
    <View>
      <Text style={stil.naslov}>REGISTRACIJA</Text>

      <Text style={stil.naslov2}> Email</Text>
      <TextInput
        placeholder="Unesite email"
        value={email}
        onChangeText={(tekst) => setEmail(tekst)}
        style={stil.input}
      />
      <Text style={stil.naslov2}>Password</Text>
      <TextInput
        placeholder="Unesite password"
        secureTextEntry={true}
        value={password}
        onChangeText={(tekst) => setPassword(tekst)}
        style={stil.input}
      />
      <TouchableOpacity
        onPress={registracija}
        style={{
          backgroundColor: "yellow",
          padding: 10,
          alignItems: "center",
          borderRadius: 20,
          alignSelf: "center",
          width: "40%",
        }}
      >
        <Text style={{ fontSize: 20 }}>Registriraj se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.replace("Login")}
        style={{
          marginTop: 15,
          backgroundColor: "teal",
          padding: 10,
          alignItems: "center",
          borderRadius: 20,
          alignSelf: "center",
          width: "40%",
        }}
      >
        <Text style={{ fontSize: 20 }}>Prijavi se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
