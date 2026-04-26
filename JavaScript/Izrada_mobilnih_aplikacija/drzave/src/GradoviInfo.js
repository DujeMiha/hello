import React from "react";

function GradoviInfo({ grad, znamenitosti }) {
  if (!znamenitosti) {
    return (
      <div>
        <h3>Znamenitosti:</h3>
        <p>Nema ih!!!</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Znamenitosti grada {grad}:</h3>
      <ul>
        {znamenitosti.map((z) => (
          <li key={z.naziv}>
            <strong>{z.naziv}</strong> — {z.opis}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GradoviInfo;
