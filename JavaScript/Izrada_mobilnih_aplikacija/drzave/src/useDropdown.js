import { useState } from "react";
import React from "react";

function useDropdown(opcije) {
  const [state, setState] = useState(opcije[0]);

  const dropdown = (
    <select value={state} onChange={(e) => setState(e.target.value)}>
      {opcije.map((o) => (
        <option value={o} key={o}>
          {o}
        </option>
      ))}
    </select>
  );

  return [state, dropdown, setState];
}

export default useDropdown;
