import React from "react";

function VozacInfo({ vozac, rezultati }) {
  if (!rezultati)
    return (
      <div>
        <h3>Rezultati za {vozac}: </h3>
        <p>Nema podium</p>
      </div>
    );

  return (
    <div>
      <h3>Rezultati za {vozac}: </h3>
      <ul>
        {rezultati.map((r) => (
          <li key={r.utrka}>
            {r.utrka} --- {r.pozicija}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VozacInfo;
