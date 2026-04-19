import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import useDropdown from "./useDropdown";
import VozacInfo from "./VozacInfo";

const data = {
  "Red Bull": ["Max Verstappen", "Sergio Pérez"],
  Ferrari: ["Charles Leclerc", "Carlos Sainz"],
  Mercedes: ["Lewis Hamilton", "George Russell"],
  McLaren: ["Lando Norris", "Oscar Piastri"],
};

const vozaciDetalji = {
  "Max Verstappen": [
    { utrka: "Bahrain GP", pozicija: "🥇 1. mjesto" },
    { utrka: "Monaco GP", pozicija: "🥇 1. mjesto" },
    { utrka: "British GP", pozicija: "🥈 2. mjesto" },
  ],
  "Sergio Pérez": [
    { utrka: "Saudi Arabia GP", pozicija: "🥇 1. mjesto" },
    { utrka: "Azerbaijan GP", pozicija: "🥇 1. mjesto" },
    { utrka: "Monaco GP", pozicija: "🥈 2. mjesto" },
  ],
  "Charles Leclerc": [
    { utrka: "Italian GP", pozicija: "🥇 1. mjesto" },
    { utrka: "Austrian GP", pozicija: "🥈 2. mjesto" },
    { utrka: "Bahrain GP", pozicija: "🥉 3. mjesto" },
  ],
  "Carlos Sainz": [
    { utrka: "Singapore GP", pozicija: "🥇 1. mjesto" },
    { utrka: "Italian GP", pozicija: "🥈 2. mjesto" },
    { utrka: "Monaco GP", pozicija: "🥉 3. mjesto" },
  ],
};

function App() {
  const [tim, timDropdown] = useDropdown(Object.keys(data));
  const [vozac, vozacDropdown, setVozac] = useDropdown(data[tim]);
  const [rezultati, setRezultati] = useState(vozaciDetalji[vozac]);

  useEffect(() => {
    setVozac(data[tim][0]);
  }, [tim]);

  useEffect(() => {
    setRezultati(vozaciDetalji[vozac]);
  }, [vozac]);

  return (
    <div>
      <h1>Odaberi tim: </h1>
      {timDropdown}
      <h2>Odaberi vozaca: </h2>
      {vozacDropdown}

      <p>
        Odabrali ste tim <strong>{tim}</strong> i vozaca tog tima
        <strong>{vozac}</strong>
      </p>

      <VozacInfo vozac={vozac} rezultati={rezultati} />
    </div>
  );
}

export default App;
