import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  const [tim, timDropdown, setTim] = useDropdown(Object.keys(data));
  const [vozac, vozacDropdown, setVozac] = useDropdown(data[tim]);
  const [podaci, setPodaci] = useState(vozaciDetalji[vozac]);

  useEffect(() => {
    setVozac(data[tim][0]);
  }, [tim]);

  useEffect(() => {
    setPodaci(vozaciDetalji[vozac]);
  }, [vozac]);

  return (
    <div>
      <h1>Odaberi ekipu</h1>
      {timDropdown}

      <h2>Odaberi vozaca</h2>
      {vozacDropdown}

      <VozacInfo vozac={vozac} podaci={podaci} />
    </div>
  );
}

export default App;
