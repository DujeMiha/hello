import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Alert } from "react-native";
import {
  dugmad,
  dugmadRaspored,
  dugmadSlova,
  naslov,
  podnaslov,
  pozadina,
  textBox,
} from "../style";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const prijava = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Greska", error.message);
      });
  };

  return (
    <View style={pozadina}>
      <Text style={naslov}>PRIJAVA</Text>

      <Text style={podnaslov}> Email</Text>
      <TextInput
        placeholder="Unesite email"
        value={email}
        onChangeText={(tekst) => setEmail(tekst)}
        style={textBox}
      />
      <Text style={podnaslov}>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Unesite password"
        value={password}
        onChangeText={(tekst) => setPassword(tekst)}
        style={textBox}
      />
      <View style={dugmadRaspored}>
        <TouchableOpacity
          onPress={() => navigation.replace("Register")}
          style={dugmad}
        >
          <Text style={dugmadSlova}>Registriraj se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={prijava} style={dugmad}>
          <Text style={dugmadSlova}>Prijavi se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
