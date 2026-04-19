import { useState } from "react";

function useDropdown(opcije) {
  const [state, setState] = useState(opcije[0]);

  const dropdown = (
    <select value={state} onChange={(e) => setState(e.target.value)}>
      {opcije.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );

  return [state, dropdown, setState];
}

export default useDropdown;
