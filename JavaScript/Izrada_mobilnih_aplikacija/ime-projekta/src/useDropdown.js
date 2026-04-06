import React, { useState } from "react";

const useDropdown = (opcije) => {
  const [odabrano, setOdabrano] = useState(opcije[0]);

  const Dropdown = () => (
    <select value={odabrano} onChange={(e) => setOdabrano(e.target.value)}>
      {opcije.map((opcija) => (
        <option key={opcija} value={opcija}>
          {opcija}
        </option>
      ))}
    </select>
  );

  return [odabrano, setOdabrano, Dropdown];
};

export default useDropdown;
