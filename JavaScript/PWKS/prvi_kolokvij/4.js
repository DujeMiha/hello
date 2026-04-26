// 1.

// Napisanu funkciju ocjena(k1, k2, sem) zapiši kao:
// - arrow funkciju s pozivom ocjena_arrow(50, 80, 80),
// - currying funkciju s pozivom ocjena_currying(50)(80)(80).
/*
const ocjena = (k1, k2, sem) => {
  return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
};

const ocjena = (k1) => (k2) => (sem) => k1 * 0.42 + k2 * 0.42 + sem * 0.16;

console.log(`Postotak ostvaren na kolegiju ${ocjena(50)(80)(80)}`);
*/

// 2.

// Napisati zasebno arrow i currying funkciju koja će ispisivati poruku o
// ostvarenom rezultatu iz ispita iz određenog kolegija.
// Prva vrijednost koja se šalje funkciji je naziv kolegija, druga ostvareni broj
// bodova, a treća ukupan broj bodova.
// Primjer poziva funkcije rezultat je rezultat("PWKS")(25)(35), a primjer ispisa
// pozvane funkcije „Iz kolegija PWKS ostvarili ste 71.43% „. Koristiti metodu
// toFixed objekta Number za zaokruživanje rezultata na dva decimalna mjesta.
/*
const arrowRez = (kolegij, ostvareni, ukupni) => {
  console.log(
    `Iz kolegija ${kolegij} ostvarili ste ${((ostvareni / ukupni) * 100).toFixed(2)}% `,
  );
};

arrowRez("PWKS", 25, 35);

const curryRez = (kolegij) => (ostvareni) => (ukupni) =>
  console.log(
    `Iz kolegija ${kolegij} ostvarili ste ${((ostvareni / ukupni) * 100).toFixed(2)}% `,
  );

curryRez("PWKS")(25)(35);
*/

// 3.

// Napisati currying funkciju koja množi brojeve sa zadnjom parnom znamenkom.
// Za funkciju s pozivom mnozi(2)(5)(13)(10)(14)(177)(4)(0)() ispisuje se rezultat
// 1120.
/*
const parni = (x) => {
  let suma = 1;

  const zbroj = (y) => {
    if (y === undefined) {
      return suma;
    }
    if (y !== 0 && (y % 10) % 2 === 0) {
      suma *= y;
    }
    return zbroj;
  };
  return zbroj;
};

let x = parni();
console.log(x(2)(5)(13)(10)(14)(177)(4)(0)());
*/

// 4.

// Kreiraj konstruktor Kolegij s atributima (property) godina, semestar, kol1,
// kol2, ocjena_rez i dvije metode ocjena() i info().
// Funkcija ocjena() ispisuje postotak riješenosti => kol1*0.5 + kol2*0.5.
// Funkcija info() ispisuje poruku „Student na predmetu PWKS, {godina}. godina,
// {semestar}. semestar, ostvario je {ocjena_rez}%“.
// Kreirati dva objekta i postaviti vrijednosti pomoću konstruktora. Pozvati
// funkcije ocjena() i info() u oba objekta.

// 5.

// U prethodnom zadatku drugo kreiranom objektu dodati atribut ime, prezime i
// status. Ispisati poruku „Student {ime} {prezime} ima {formula}%“.

// 6.

// U prethodnom zadatku izbriši dodane atribute ime, prezime i status.

function kolegij(godina, semestar, kol1, kol2) {
  this.godina = godina;
  this.semestar = semestar;
  this.kol1 = kol1;
  this.kol2 = kol2;
  this.ocjena_rez = 0;

  this.ocjena = function () {
    this.ocjena_rez = this.kol1 * 0.5 + this.kol2 * 0.5;
  };

  this.info = function () {
    return console.log(
      `Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez.toFixed(2)}%`,
    );
  };
}

const duje = new kolegij(3, 6, 90, 63);
duje.ime = "Duje";
duje.prezime = "Mihaljevic";
duje.status = "redovni";
duje.ocjena();
duje.info();
delete duje.ime;
delete duje.prezime;
delete duje.status;
console.log(`Student ${duje.ime} ${duje.prezime} ima ${duje.ocjena_rez}%`);
