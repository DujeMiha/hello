import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, FlatList } from "react-native";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { auth, database } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import {
  dugmadSlova,
  dugmad,
  dugmadRaspored,
  naslov,
  pozadina,
  DugmeLudo,
} from "../style";

const Home = ({ navigation }) => {
  const [zadaci, setZadaci] = useState([]);
  const [zavrsen, setZavrsen] = useState(false);

  useEffect(() => {
    const uid = auth.currentUser.uid;
    const ref = collection(database, "users", uid, "tasks");

    const slusanje = onSnapshot(ref, (snapshot) => {
      const lista = snapshot.docs.map((zadatak2) => ({
        id: zadatak2.id,
        ...zadatak2.data(),
      }));
      setZadaci(lista);
    });
    return () => slusanje();
  }, []);

  const odjava = () => {
    signOut(auth).then(() => navigation.replace("Login"));
  };

  const obrisi = (id) => {
    Alert.alert("Brisanje", "Jesi li siguran?", [
      { text: "Odustani", style: "cancel" },
      {
        text: "Obriši",
        style: "destructive",
        onPress: () => {
          const uid = auth.currentUser.uid;
          deleteDoc(doc(database, "users", uid, "tasks", id));
        },
      },
    ]);
  };

  return (
    <View style={pozadina}>
      <Text style={naslov}>ZADACI</Text>

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

      <FlatList
        data={zadaci.filter((status) => status.zavrsen === zavrsen)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "white",
              marginHorizontal: 15,
              marginBottom: 5,
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("EditZadatak", { zadatak: item })
              }
              style={{ flex: 1 }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.naziv}
              </Text>
              <Text style={{ color: "gray" }}>{item.opis}</Text>
              <Text
                style={{
                  color: item.zavrsen ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {item.zavrsen ? "Završen" : "Nije završen"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => obrisi(item.id)}
              style={{ padding: 10, backgroundColor: "red", borderRadius: 10 }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Izbriši
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={dugmadRaspored}>
        <TouchableOpacity
          onPress={() => navigation.navigate("DodajZadatak")}
          style={dugmad}
        >
          <Text style={dugmadSlova}>Dodaj zadatak</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={odjava} style={dugmad}>
          <Text style={dugmadSlova}>Odjava</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
