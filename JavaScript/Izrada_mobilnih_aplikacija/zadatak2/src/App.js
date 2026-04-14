import { useEffect, useState } from "react";
import useDropdown from "./useDropdown";
import ProizvodiList from "./ProizvodiList";

const data = {
  "Tamna čokolada": [
    "Tamna 70%",
    "Tamna 85%",
    "Tamna s narančom",
    "Tamna s mentom",
  ],
  "Mliječna čokolada": [
    "Mliječna klasična",
    "Mliječna s lješnjakom",
    "Mliječna s bademom",
    "Mliječna s karamelom",
  ],
  "Bijela čokolada": [
    "Bijela klasična",
    "Bijela s vanilijom",
    "Bijela s kokosom",
    "Bijela s jagodom",
  ],
  "Čokolada s dodacima": ["S grožđicama", "S brusnicama", "S pistacijama"],
};

const proizvodi = [
  {
    naziv: "Tamna 70% premium",
    podkategorija: "Tamna 70%",
  },
  {
    naziv: "Tamna 70% dubai",
    podkategorija: "Tamna 70%",
  },
  {
    naziv: "Bijela Vanilla",
    podkategorija: "Bijela s vanilijom",
  },
  {
    naziv: "Čokolada s brusnicama",
    podkategorija: "S brusnicama",
  },
];

function App() {
  const [vrsta, setVrsta, VrstaDropdown] = useDropdown(Object.keys(data));
  const [podvrsta, setPodvrsta, PodvrstaDropdown] = useDropdown(data[vrsta]);

  const [filtriraniProizvodi, setFiltriraniProizvodi] = useState([]);

  useEffect(() => {
    if (data[vrsta]) {
      setPodvrsta(data[vrsta][0]);
    }
  }, [vrsta]);

  useEffect(() => {
    const filtrirano = proizvodi.filter((p) => p.podkategorija === podvrsta);
    setFiltriraniProizvodi(filtrirano);
  }, [podvrsta]);

  return (
    <div>
      <div>
        <label>Vrsta</label>
        <VrstaDropdown />
      </div>

      <div>
        <label>Podvrsta</label>
        <PodvrstaDropdown />
      </div>

      <ProizvodiList proizvodi={filtriraniProizvodi} />
    </div>
  );
}

export default App;
