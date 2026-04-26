// 1.
/*
function prvi() {
  let unos1 = Number(prompt("Unesite prvi broj: "));
  let unos2 = Number(prompt("Unesite drugi broj: "));
  let unos3 = Number(prompt("Unesite treci broj: "));

  if (isNaN(unos1) || isNaN(unos2) || isNaN(unos1)) {
    prvi();
  } else {
    let sredina = (unos1 + unos2 + unos3) / 3;
    console.log(sredina.toFixed(2));
  }
}
prvi();
*/

// 2.
/*
function kalkulator(prvi, drugi, operator) {
  let rez = 0;

  if (isNaN(prvi) || isNaN(drugi)) {
    console.log("ERROR krivi unos!!!");
  } else {
    if (operator === "+") {
      rez = prvi + drugi;
      console.log(rez);
    } else if (operator === "-") {
      rez = prvi - drugi;
      console.log(rez);
    } else if (operator === "*") {
      rez = prvi * drugi;
      console.log(rez);
    } else if (operator === "/") {
      if (drugi === 0) {
        console.log("ERROR! Drugi broj ne moze bit nula u dijeljenju");
      } else {
        rez = prvi / drugi;
        console.log(rez);
      }
    } else {
      console.log("ERROR! Krivi unos!");
    }
  }
}

let unos1 = Number(prompt("Unesite prvi broj: "));
let unos2 = Number(prompt("Unesite drugi broj: "));
let operator = prompt("Unesite operator: ");

kalkulator(unos1, unos2, operator);
*/

// 3.

// Napisati funkciju koja kao povratnu vrijednost vraća prvu znamenku unesenog
// deseteroznamenkastog broja npr. za broj 1254192518 funkcija vraća 1 i
// rezultat ispisuje u konzoli
/*
const provjera = (unos) => {
  let broj = Number(unos);

  if (isNaN(broj)) {
    return "Greska treba unijeti broj!!!";
  } else if (unos.length === 10) {
    return unos[0];
  } else {
    return "Greska";
  }
};

let unos = prompt("Unesite broj od 10 znamenki: ");

const prvi = provjera(unos);
console.log(prvi);
*/

// 4.

// Napisati void funkciju koji unosi mjesec i ispisuje koje je godišnje doba u skočnom
// prozoru (alert). Za 1., 2. i 3. mjesec ispisuje zima, za 4., 5. i 6. ispisuje proljeće,
// za 7., 8. i 9. mjesec program ispisuje ljeto, a za 10., 11. i 12. ispisuje jesen.

/*
const doba = () => {
  let mjesec = Number(prompt("Unesite broj: "));

  if (isNaN(mjesec) || mjesec < 1 || mjesec > 12) {
    alert("Greska!!!");
  }

  switch (mjesec) {
    case 1:
      alert("Zima");
      break;
    case 2:
      alert("Zima");
      break;
    case 3:
      alert("Zima");
      break;
    case 4:
      alert("proljece");
      break;
    case 5:
      alert("proljece");
      break;
    case 6:
      alert("proljece");
      break;
    case 7:
      alert("ljeto");
      break;
    case 8:
      alert("ljeto");
      break;
    case 9:
      alert("ljeto");
      break;
    case 10:
      alert("Jesen");
      break;
    case 11:
      alert("Jesen");
      break;
    case 12:
      alert("Jesen");
      break;
  }
};

doba();
*/

// 5.

// Napisati funkciju koja provjerava broj pojavljivanja znamenke z u prirodnom
// broju n. Funkcija za unose korisnika npr. n = 2955, z =5, vraća poruku „U broju
// 2955 imamo 2 pojavljivanja broja 5.“, te ispisuje u konzoli.
/*
function provjera(unos, x) {
  let stringUnos = unos.toString();
  let stringX = x.toString();
  let brojac = 0;

  for (let i = 0; i < stringUnos.length; i++) {
    if (stringUnos[i] === stringX) {
      brojac = brojac + 1;
    }
  }
  console.log(`U broju ${unos} imamo ${brojac} pojavljivanja broja ${x}.`);
}
*/
/*
function provjera(unos, x) {
  let brojac = 0;
  let original = unos;
  do {
    if (unos % 10 === x) {
      brojac++;
    }
    unos = Math.floor(unos / 10);
  } while (unos !== 0);
  console.log(`U broju ${original} imamo ${brojac} pojavljivanja broja ${x}.`);
}

let unos = Number(prompt("Unesite broj: "));
let x = Number(prompt("Broj za provjeru ponavljanja: "));

provjera(unos, x);
*/
