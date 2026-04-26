import React from "react";
import { useState } from "react";

function useDropdown(opcije) {
  const [state, setState] = useState(opcije[0]);

  const dropdown = (
    <select onChange={(e) => setState(e.target.value)}>
      {opcije.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );

  return [state, dropdown, setState];
}

export default useDropdown;
