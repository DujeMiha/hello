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
  const [drzava, drzavaDropdown, setDrzava] = useDropdown(Object.keys(data));
  const [grad, gradDropdown, setGrad] = useDropdown(data[drzava]);
  const [znamenitosti, setZnamenitosti] = useState(gradoviDetalji[grad]);

  useEffect(() => {
    setGrad(data[drzava][0]);
  }, [drzava]);

  useEffect(() => {
    setZnamenitosti(gradoviDetalji[grad]);
  }, [grad]);

  return (
    <div>
      <h1>Odaberi drzavu: </h1>
      {drzavaDropdown}

      <h2>Odaberi grad: </h2>
      {gradDropdown}

      <p>
        Odabrali ste grad <strong>{grad}</strong> iz{" "}
        <strong>{drzava}</strong>{" "}
      </p>

      <GradoviInfo grad={grad} znamenitosti={znamenitosti} />
    </div>
  );
}

export default App;
