// 1.

// Kreirajte proizvoljan numerički niz te koristeći se ugrađenim funkcijama za
// nizove napravite sljedeće zadatke:
// • dodaj element na početak niza
// • dodaj element na kraj niza
// • dodaj element na predzadnje mjesto niza
// • izbriši drugi element niza
// • izbriši zadnji element niza
// • izmijeni drugi element
// • zbroji sve elemente niza
// • ispiši sve elemente niza koristeći se FOR petljom
/*
let niz = [10, 20, 30, 40, 50];
console.log("Pocetni niz: ", niz);

niz.unshift(5);
console.log("Dodaj na pocetak: ", niz);

niz.push(60);
console.log("Dodaj na kraj: ", niz);

niz.splice(niz.length - 1, 0, 55);
console.log("Dodaj na predzadnje: ", niz);

niz.splice(1, 1);
console.log("Izbrisi drugi: ", niz);

niz.pop();
console.log("Izbrisi zadnji: ", niz);

niz.splice(1, 1, 15);
console.log("Izmjeni drugi: ", niz);

let zbroj = niz.reduce((akumulator, broj) => akumulator + broj);
console.log("Zbroj: ", zbroj);

for (let i = 0; i < niz.length; i++) {
  console.log(niz[i]);
}

for (let element of niz) {
  console.log(element);
}
*/

// 2.

// Kreiraj niz objekata koji predstavlja trgovinu s atributima: naziv_proizvoda,
// godina_proizvodnje, cijena, količina i popust. Ispiši nazive artikla koji imaju cijenu
// manju od 50 koristeći se funkcijom filter().

let trgovina = [
  {
    naziv_proizvoda: "banana",
    godina_proizvodnje: 2025,
    cijena: 400,
    kolicina: 100,
    popust: 0,
  },
  {
    naziv_proizvoda: "jabuka",
    godina_proizvodnje: 2025,
    cijena: 200,
    kolicina: 5,
    popust: 20,
  },
  {
    naziv_proizvoda: "ananas",
    godina_proizvodnje: 2025,
    cijena: 4555,
    kolicina: 20,
    popust: 24,
  },
];
/*
let novi = trgovina.filter((k) => {
  if (k.cijena < 50) {
    console.log(k.naziv_proizvoda);
  }
});
*/

// 3.

// U nizu trgovina iz prethodnog zadatka prebroj količinu artikala koristeći se
// funkcijom reduce().
/*
let ukupno = trgovina.reduce((akumulator, p) => akumulator + p.kolicina, 0);
console.log(ukupno);
*/

// 4.
// U nizu trgovina ispiši nazive trgovina koristeći se funkcijom map().
/*
let ispis = trgovina.map((p) => {
    console.log(p.naziv_proizvoda);
});
*/

// 5.

// Koristeći se arrow funkcijama i ternarnim operatorom (po potrebi) kreiraj
// funkciju koja:
// • provjerava je li broj pozitivan ili negativan, vraća true(1) ili false(0).
// • provjerava parnost broja, vraća „Pozitivan“ ili „Negativan“
// • računa kub broja
// • ispisuje poruku „Hello Wordl!“
/*
const provjera = (broj) => {
  console.log("Pozitivan ili negativan: ", broj > 0 ? true : false);
  console.log("Parnost: ", broj % 2 === 0 ? "Pozitivan" : "negativan");
  console.log("Kub broja", broj ** 3);
  console.log("Hello World!");
};

let broj = Number(prompt("Unesite broj: "));
provjera(broj);
*/
