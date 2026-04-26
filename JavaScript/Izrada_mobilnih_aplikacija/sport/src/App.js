import { useEffect } from "react";
import { useState } from "react";
import useDropdown from "./useDropdown";
import IgraciDetaljno from "./IgraciDetaljno";
import React from "react";

const data = {
  Nogomet: ["Luka Modrić", "Lionel Messi", "Cristiano Ronaldo"],
  Košarka: ["LeBron James", "Stephen Curry", "Nikola Jokić"],
  Tenis: ["Novak Đoković", "Rafael Nadal", "Roger Federer"],
};

const igraciDetalji = {
  "Lionel Messi": [
    { naziv: "Klub", opis: "Inter Miami" },
    { naziv: "Pozicija", opis: "Napadač" },
    { naziv: "Zlatna lopta", opis: "8 puta osvojio" },
  ],
  "Cristiano Ronaldo": [
    { naziv: "Klub", opis: "Al Nassr" },
    { naziv: "Pozicija", opis: "Napadač" },
    { naziv: "Zlatna lopta", opis: "5 puta osvojio" },
  ],
  "LeBron James": [
    { naziv: "Klub", opis: "Los Angeles Lakers" },
    { naziv: "Pozicija", opis: "Small Forward" },
    { naziv: "NBA naslovi", opis: "4 puta prvak" },
  ],
  "Stephen Curry": [
    { naziv: "Klub", opis: "Golden State Warriors" },
    { naziv: "Pozicija", opis: "Point Guard" },
    { naziv: "NBA naslovi", opis: "4 puta prvak" },
  ],
  "Nikola Jokić": [
    { naziv: "Klub", opis: "Denver Nuggets" },
    { naziv: "Pozicija", opis: "Centar" },
    { naziv: "MVP", opis: "3 puta osvojio" },
  ],
  "Novak Đoković": [
    { naziv: "Država", opis: "Srbija" },
    { naziv: "Grand Slam naslovi", opis: "24 naslova" },
    { naziv: "ATP ranking", opis: "Bivši #1 na svijetu" },
  ],
  "Rafael Nadal": [
    { naziv: "Država", opis: "Španjolska" },
    { naziv: "Grand Slam naslovi", opis: "22 naslova" },
    { naziv: "Specijalnost", opis: "Kralj šljake (Roland Garros 14×)" },
  ],
  "Roger Federer": [
    { naziv: "Država", opis: "Švicarska" },
    { naziv: "Grand Slam naslovi", opis: "20 naslova" },
    { naziv: "Status", opis: "Umirovio se 2022." },
  ],
};

function App() {
  const [sport, sportDropdown, setSport] = useDropdown(Object.keys(data));
  const [igrac, igraciDropdown, setIgrac] = useDropdown(data[sport]);
  const [podaci, setPodaci] = useState(igraciDetalji[igrac]);

  useEffect(() => {
    setIgrac(data[sport][0]);
  }, [sport]);

  useEffect(() => {
    setPodaci(igraciDetalji[igrac]);
  }, [igrac]);

  return (
    <div>
      <h1>Odaberi sport: </h1>
      {sportDropdown}
      <h2>Odaberi igraca: </h2>
      {igraciDropdown}
      {
        <p>
          Odabrali ste: <strong>{igrac}</strong> koji igra{" "}
          <strong>{sport}</strong>
        </p>
      }

      <IgraciDetaljno igrac={igrac} podaci={podaci} />
    </div>
  );
}

export default App;
