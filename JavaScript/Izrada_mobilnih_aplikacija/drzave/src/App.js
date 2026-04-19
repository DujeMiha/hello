import { useEffect } from "react";
import useDropdown from "./useDropdown";
import React from "react";
import { useState } from "react";
import GradoviInfo from "./GradoviInfo";

const data = {
  Hrvatska: ["Zagreb", "Split", "Rijeka"],
  Njemačka: ["Berlin", "München", "Hamburg"],
  Italija: ["Rim", "Milano", "Napulj"],
};

const gradoviDetalji = {
  Zagreb: [
    { naziv: "Katedrala Uznesenja", opis: "Najpoznatija građevina Zagreba" },
    { naziv: "Gornji grad", opis: "Povijesna jezgra s pogledom na grad" },
    { naziv: "Dolac", opis: "Poznata tržnica u središtu grada" },
  ],
  Split: [
    { naziv: "Dioklecijanova palača", opis: "Rimska palača iz 4. stoljeća" },
    { naziv: "Riva", opis: "Popularna splitska šetnica uz more" },
    { naziv: "Klis tvrđava", opis: "Srednjovjekovna tvrđava iznad Splita" },
  ],
  Rijeka: [
    { naziv: "Trsat", opis: "Tvrđava s pogledom na Kvarnerski zaljev" },
    { naziv: "Korzo", opis: "Glavna šetnica u centru Rijeke" },
    {
      naziv: "Guvernerova palača",
      opis: "Muzej moderne i suvremene umjetnosti",
    },
  ],
};

function App() {
  const [drzava, drzavaDropdown] = useDropdown(Object.keys(data));
  const [grad, gradDropdown, setGrad] = useDropdown(data[drzava]);
  const [znamenitost, setZnamenitost] = useState(gradoviDetalji[grad]);

  useEffect(() => {
    setGrad(data[drzava][0]);
  }, [drzava]);
  useEffect(() => {
    setZnamenitost(gradoviDetalji[grad]);
  });

  return (
    <div>
      <h1>Odaberi drzavu:</h1>
      {drzavaDropdown}

      <h1>Odaberi grad:</h1>
      {gradDropdown}

      <p>
        Odabrao si: <strong>{grad}</strong>, <strong>{drzava}</strong>
      </p>

      <GradoviInfo drzava={drzava} grad={grad} znamenitosti={znamenitost} />
    </div>
  );
}

export default App;
