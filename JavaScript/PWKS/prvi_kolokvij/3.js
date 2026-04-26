// 1.

// Kreirati niz koji će sadržavati deset slučajno generiranih brojeva u
// intervalu od 100 do 200, zaokruženih na najbliži cijeli broj. Sortirati
// elemente niza od manjeg prema većem funkcijom sort(). Obratiti
// pozornost kod sortiranja numeričkih i tekstualnih elemenata.

/*
let niz = [];
for (let i = 0; i < 10; i++) {
  niz.push(Math.floor(Math.random() * 101 + 100));
}
console.log(niz.sort((a, b) => a - b));
*/

// 2.

// Omogućiti unos brojeva dok se ne unese 0. Zbrojiti parne i neparne
// brojeve koristeći se closure funkcijom arrow zapisa. Zabranjeno je
// koristiti nizove.
/*
const zbroj = (broj) => {
  let parni = 0;
  let neparni = 0;

  const closure = (broj) => {
    if (broj === 0) {
      console.log(`Zbroj parni ${parni}, Zbroj neparni ${neparni}`);
      return true;
    }
    if (broj % 2 === 0) {
      parni += broj;
    } else {
      neparni += broj;
    }
    return false;
  };
  return closure;
};

const provjera = zbroj();

let gotovo;
do {
  let unos = Number(prompt("Unesite broj: "));

  if (!isNaN(unos)) {
    gotovo = provjera(unos);
  }
} while (!gotovo);
*/

// 3.
// Kreirati closure funkciju koja vraća poruku „Programirati nije teško“.
/*
const closure = () => {
  const unutra = () => {
    console.log("Programirati nije tesko");
  };
  return unutra;
};

const rez = closure();
rez();
*/

// 5.

// Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije s
// promjenjivim brojem argumenata u formatu (a)(b)(c)… koja bi trebala
// vratiti umnožak pozitivnih brojeva manjih od 20.

/*
const provjera = (x) => {
  let umnozak = x > 0 && x < 20 ? x : 1;
  const inner = (y) => {
    if (y === undefined) {
      return umnozak;
    }
    if (y > 0 && y < 20) {
      umnozak *= y;
    }
    return inner;
  };
  return inner;
};

let x = provjera();
console.log(x(3)(4)(5)(21)(1)(1)(1)(3)());
*/
