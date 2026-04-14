function ProizvodiList({ proizvodi }) {
  return (
    <div>
      <h2>Proizvodi</h2>

      {proizvodi.length === 0 ? (
        <p>Nema proizvoda</p>
      ) : (
        <ul>
          {proizvodi.map((p, index) => (
            <li key={index}>{p.naziv}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProizvodiList;
