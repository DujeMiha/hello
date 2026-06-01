import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, database } from "../firebaseConfig";
import {
  dugmad,
  dugmadRaspored,
  dugmadSlova,
  DugmeLudo,
  naslov,
  podnaslov,
  textBox,
} from "../style";

const EditZadatak = ({ navigation, route }) => {
  const { zadatak } = route.params;

  const [naziv, setNaziv] = useState(zadatak.naziv);
  const [opis, setOpis] = useState(zadatak.opis);
  const [zavrsen, setZavrsen] = useState(zadatak.zavrsen);

  const spremi = async () => {
    if (naziv === "") {
      Alert.alert("Greška", "Naziv ne može biti prazan!");
      return;
    }

    const uid = auth.currentUser.uid;
    const ref = doc(database, "users", uid, "tasks", zadatak.id);

    await updateDoc(ref, {
      naziv: naziv,
      opis: opis,
      zavrsen: zavrsen,
    });

    navigation.replace("Home");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "grey" }}>
      <Text style={naslov}>UREDI ZADATAK</Text>

      {/* Ovjde je NAZIV */}

      <Text style={podnaslov}>Naziv</Text>
      <TextInput
        value={naziv}
        onChangeText={(tekst) => setNaziv(tekst)}
        style={textBox}
      />

      {/* Ovjde je OPIS */}

      <Text style={podnaslov}>Opis</Text>
      <TextInput
        value={opis}
        onChangeText={(tekst) => setOpis(tekst)}
        style={textBox}
      />

      {/* Ovjde je ZAVRSENO ili NIJE ZAVRSENO */}

      <TouchableOpacity
        onPress={() => setZavrsen(!zavrsen)}
        style={[
          DugmeLudo,
          {
            backgroundColor: zavrsen ? "green" : "red",
          },
        ]}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {zavrsen ? "Završen" : "Nije završen"}
        </Text>
      </TouchableOpacity>

      {/* Ovjde je SPREMI I NAZAD */}
      <View style={dugmadRaspored}>
        <TouchableOpacity onPress={spremi} style={dugmad}>
          <Text style={dugmadSlova}>Spremi</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.replace("Home")}
          style={dugmad}
        >
          <Text style={dugmadSlova}>Nazad</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditZadatak;
