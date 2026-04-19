import React from "react";

function GradoviInfo({ drzava, grad, znamenitosti }) {
  if (!znamenitosti)
    return (
      <div>
        <h3>
          Znamenitosti grada {grad}-a u drzavi {drzava}:
        </h3>
        <p>Nema ih.</p>
      </div>
    );
  return (
    <div>
      <h3>Znamenitosti grada {grad}-a: </h3>
      <ul>
        {znamenitosti.map((z) => (
          <li key={z.naziv}>
            {z.naziv} --- {z.opis}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GradoviInfo;
