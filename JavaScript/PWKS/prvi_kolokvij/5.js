/*
function closure(broj) {
  return () => (broj += 1);
}

const x = closure(10);
console.log(x());
console.log(x());
console.log(x());
console.log(x());


const provjera = (string) => {
  for (let broj of string) {
    let poruka = isNaN(broj) && broj !== " " ? false : true;
    if (poruka === false) {
      return false;
    }
  }
  return true;
};

console.log(provjera("1232122133213213123   1231"));


const zbroji = (a, b) => (c) => a + b + c;

console.log(zbroji(2, 3)(4));


let niz = [1, 2, 3, 4, 5, 6];

const parni = (niz) => niz.filter((broj) => broj % 2 === 0);

console.log(parni(niz));


const ocjena = (broj) => {
  let poruka =
    broj === 1
      ? "Nedovoljan"
      : broj === 2
        ? "Dovoljan"
        : broj === 3
          ? "Dobar"
          : broj === 4
            ? "Vrlo dobar"
            : broj === 5
              ? "Odlican"
              : "Krivi unos";

  return poruka;
};

let broj = Number(prompt("Unesite broj: "));
console.log(ocjena(broj));


const closure = () => {
  let brojac = 0;

  const inner = () => {
    brojac++;
    console.log(brojac);
  };
  return inner;
};

const x = closure();
x();
x();
x();
x();


const curry = (x) => {
  return (y) => {
    return (umnozak = x * y);
  };
};

console.log(curry(3)(2));


let niz = [10, 20, 30, 40, 50];

niz.splice(1, 0, 99);
console.log(niz);

niz.splice(niz.length - 2, 2);
console.log(niz);

niz.unshift(1, 2);
console.log(niz);


let niz = [1, 2, 3, 4, 5];
let index = 1;

const brisi = (niz) => {
  let novi = [...niz];
  return (index) => {
    novi.splice(index, 1);
    return novi;
  };
};
const x = brisi(niz);
console.log(x(index));
console.log(x(index));
console.log(x(index));
console.log(x(index));
console.log(niz);
*/

let kosarica = [
  { naziv: "Laptop", cijena: 5000 },
  { naziv: "Miš", cijena: 1 },
  { naziv: "Tipkovnica", cijena: 300 },
];

console.log("Pocetna ksoarica");
kosarica.map((p) => {
  console.log(p.naziv, p.cijena);
});

////////////////////////////////////////////////////////////////////////////////////

const dodaj = (kosarica, naziv, cijena) => {
  kosarica.push({ naziv, cijena });
  return kosarica;
};

dodaj(kosarica, "Monitor", 3000);
console.log("\nDodavanje Monitora: ");
kosarica.map((p) => {
  console.log(p.naziv, p.cijena);
});

////////////////////////////////////////////////////////////////////////////////////
const ukloni = (kosarica, naziv) => {
  let index = kosarica.findIndex((proizovod) => proizovod.naziv === naziv);
  if (index === -1) {
    console.log("Nije pronaden proizovod");
    return kosarica;
  }
  kosarica.splice(index, 1);
  return kosarica;
};

ukloni(kosarica, "Laptop");
console.log("\nBrisanje Laptopa: ");
kosarica.map((p) => {
  console.log(p.naziv, p.cijena);
});

////////////////////////////////////////////////////////////////////////////////////

const sortiranja = (kosarica) => {
  let nova = [...kosarica].sort((a, b) => a.cijena - b.cijena);
  nova.map((p) => {
    console.log(p.naziv, p.cijena);
  });
};

console.log("\nSortiranje: ");
sortiranja(kosarica);

////////////////////////////////////////////////////////////////////////////////////

const suma = (kosarica) => {
  return kosarica.reduce((suma, p) => suma + p.cijena, 0);
};

console.log("\nSuma: ");
console.log(suma(kosarica));

////////////////////////////////////////////////////////////////////////////////////

const popust = (kosarica, popust) => {
  return kosarica.map((p) => ({
    ...p,
    cijena: p.cijena * (1 - popust / 100),
  }));
};

console.log("\nPopust 10%:");
popust(kosarica, 10).forEach((p) => console.log(p.naziv, p.cijena));
console.log("\nOriginal nakon popusta:");
kosarica.forEach((p) => console.log(p.naziv, p.cijena));
