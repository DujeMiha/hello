import { useEffect } from "react";
import useDropdown from "./useDropdown";

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
    "Bijela s kokosом",
    "Bijela s jagodом",
  ],
  "Čokolada s dodacima": [
    "S grožđicama",
    "S brusnicama",
    "S pistacijama",
    "S quinoom",
  ],
};

function App() {
  const [vrsta, setVrsta, VrstaDropdown] = useDropdown(Object.keys(data));
  const [podvrsta, setPodvrsta, PodvrstaDropdown] = useDropdown(data[vrsta]);

  useEffect(() => {
    setPodvrsta(data[vrsta][0]);
  }, [vrsta]);

  return (
    <div>
      <h1>Kraft Čokolaterija</h1>
      <div>
        <label>Vrsta</label>
        <VrstaDropdown />
      </div>
      <div>
        <label>Podvrsta</label>
        <PodvrstaDropdown />
      </div>
      <p>
        Odabrali ste: {vrsta} - {podvrsta}
      </p>
    </div>
  );
}

export default App;
