import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { auth, database } from "../firebaseConfig";
import {
  dugmad,
  dugmadRaspored,
  dugmadSlova,
  naslov,
  podnaslov,
  textBox,
} from "../style";

const DodajZadatak = ({ navigation }) => {
  const [naziv, setNaziv] = useState("");
  const [opis, setOpis] = useState("");

  const spremi = async () => {
    if (naziv === "") {
      Alert.alert("Greska", "Potreban je unos!");
      return;
    }
    const uid = auth.currentUser.uid;
    await addDoc(collection(database, "users", uid, "tasks"), {
      naziv: naziv,
      opis: opis,
      zavrsen: false,
    });

    navigation.replace("Home");
  };

  return (
    <View style={{ backgroundColor: "grey", flex: 1 }}>
      <Text style={naslov}>NOVI ZADATAK</Text>

      <Text style={podnaslov}>Naziv</Text>
      <TextInput
        placeholder="Unesite naziv"
        value={naziv}
        onChangeText={(tekst) => setNaziv(tekst)}
        style={textBox}
      ></TextInput>

      <Text style={podnaslov}>Opis</Text>
      <TextInput
        value={opis}
        onChangeText={(tekst) => setOpis(tekst)}
        style={textBox}
      ></TextInput>

      <View style={dugmadRaspored}>
        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={dugmad}
        >
          <Text style={dugmadSlova}>Nazad</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={spremi} style={dugmad}>
          <Text style={dugmadSlova}>Spremi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DodajZadatak;
