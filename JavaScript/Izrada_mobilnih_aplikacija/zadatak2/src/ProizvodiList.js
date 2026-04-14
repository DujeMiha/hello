function ProizvodiList({ proizvodi }) {
  return (
    <div>
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
