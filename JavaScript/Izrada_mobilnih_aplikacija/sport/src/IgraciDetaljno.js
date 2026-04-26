import React from "react";

function IgraciDetalji({ igrac, podaci }) {
  if (!podaci) {
    return (
      <div>
        <h3>Podaci o igracu: </h3>
        <p>Nema ih!!!</p>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {podaci.map((p) => (
          <li key={p.naziv}>
            {p.naziv} - - - {p.opis}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default IgraciDetalji;
