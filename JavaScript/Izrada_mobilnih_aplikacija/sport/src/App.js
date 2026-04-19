import { useEffect } from "react";
import useDropdown from "./useDropdown";

const data = {
  Nogomet: ["Luka Modrić", "Lionel Messi", "Cristiano Ronaldo"],
  Košarka: ["LeBron James", "Stephen Curry", "Nikola Jokić"],
  Tenis: ["Novak Đoković", "Rafael Nadal", "Roger Federer"],
};

function App() {
  const [sport, sportDropdown] = useDropdown(Object.keys(data));
  const [igrac, igraciDropdown, setIgrac] = useDropdown(data[sport]);

  useEffect(() => setIgrac(data[sport][0]), [sport]);

  return (
    <div>
      <h1>Odaberi sport: </h1>
      {sportDropdown}
      <h2>Odaberi igraca: </h2>
      {igraciDropdown}
      {
        <p>
          Odabrali ste: <strong>{igrac}</strong> koji igra{" "}
          <strong>{sport}</strong>
        </p>
      }
    </div>
  );
}

export default App;
