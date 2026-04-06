import { useState } from 'react';

const data = {
  "Tamna čokolada": ["Tamna 70%", "Tamna 85%", "Tamna s narančom", "Tamna s mentom"],
  "Mliječna čokolada": ["Mliječna klasična", "Mliječna s lješnjakom", "Mliječna s bademom", "Mliječna s karamelom"],
  "Bijela čokolada": ["Bijela klasična", "Bijela s vanilijom", "Bijela s kokosом", "Bijela s jagodом"],
  "Čokolada s dodacima": ["S grožđicama", "S brusnicama", "S pistacijama", "S quinoom"]
}

function App() {
  const [vrsta, setVrsta] = useState("Tamna čokolada")
  const [podvrsta, setPodvrsta] = useState(data["Tamna čokolada"][0])

  function handleVrsta(e) {
    const odabrano = e.target.value
    setVrsta(odabrano)
    setPodvrsta(data[odabrano][0])
  }

  return (
    <div className="App">
      <h1>Kraft Čokolaterija</h1>

      <div>
        <label>Vrsta čokolade: </label>
        <select value={vrsta} onChange={handleVrsta}>
          {Object.keys(data).map(v => (
            <option key={v} value={v}>{v}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Podvrsta: </label>
        <select value={podvrsta} onChange={e => setPodvrsta(e.target.value)}>
          {data[vrsta].map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <p>Odabrali ste: <strong>{vrsta} — {podvrsta}</strong></p>
    </div>
  );
}

export default App;
