// 1.

// Napisanu funkciju ocjena(k1, k2, sem) zapiši kao:  - -
// arrow funkciju s pozivom ocjena_arrow(50, 80, 80),
// currying funkciju s pozivom ocjena_currying(50)(80)(80).


// function ocjena(k1, k2, sem){
//     //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
//    return k1*0.42 + k2*0.42 + sem*0.16
// }

// console.log(`Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`)

/*
const ocjena = (k1, k2, sem) => k1*0.42 + k2*0.42 + 0.16*sem


const rez = ocjena(50, 80, 80)

console.log("ARROW: " + rez)

const curry = (k1) => (k2) => (sem) => k1*0.42 + k2*0.42 + 0.16*sem

const rezCurry = curry(50)(80)(80)

console.log("CURRYING: " + rezCurry)
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
let arr = ["PWKS", "OPP", "Digitalni sustav"]

const ARROW = (kolegij, brBodova, ukBodova) => {
    const rez = (brBodova / ukBodova) * 100;
    console.log(`Iz kolegija ${kolegij} ostvarili ste ${rez.toFixed(2)}%`);
}

do{
    const kolegij = prompt("Unesite ime kolegija: ")

    const postoji = arr
        .map(k => k.toLowerCase())
        .includes(kolegij.toLowerCase())

    if(postoji){
        const brBodova = Number(prompt("Unesite ostvareni broj bodova: "))
        const ukBodova = Number(prompt("Unesite ukupan broj bodova: "))
        if(ukBodova > 0 && brBodova <= ukBodova && !Number.isNaN(brBodova) && !Number.isNaN(ukBodova)){
            ARROW(kolegij, brBodova, ukBodova)
            break

        }else {
            console.log("Krivo ste unijeli bodove!!!")
        }
    }else{
        console.log("Greska!! Taj kolegij ne postoji.")
    }
}while(true)




let arr = ["PWKS", "OPP", "Digitalni sustav"]

const curry = (brBodova) => (ukBodova) => (kolegij) => {
    const rez = brBodova / ukBodova * 100
    console.log(`Iz kolegija ${kolegij} ostvarili ste ${rez.toFixed(2)}%` )
}

do{
    const kolegij = prompt("Unesite ime kolegija: ")

    const postoji = arr
        .map(k => k.toLowerCase())
        .includes(kolegij.toLowerCase())

    if(postoji){
        const brBodova = Number(prompt("Unesite ostvareni broj bodova: "))
        const ukBodova = Number(prompt("Unesite ukupan broj bodova: "))
        if(ukBodova > 0 && brBodova <= ukBodova && !Number.isNaN(brBodova) && !Number.isNaN(ukBodova)){
            curry(brBodova)(ukBodova)(kolegij)
            break
        }else {
            console.log("Krivo ste unijeli bodove!!!")
        }
    }else{
        console.log("Greska!! Taj kolegij ne postoji.")
    }
}while(true)
*/

// 3.

// Napisati currying funkciju koja množi brojeve sa zadnjom parnom znamenkom.
// Za funkciju s pozivom mnozi(2)(5)(13)(10)(14)(177)(4)(0)() ispisuje se rezultat
// 1120.
/*
function mnozi(x) {
    let rez = 1

    function next(y) {
        if (y === undefined) {
            return rez
        }

        if (y % 10 % 2 === 0 && y !== 0) {
            rez *= y
        }

        return next
    }
    return next(x)
}

let trenutna = null

do {
    unos = prompt("Unesite broj: ")

    if(unos === "" || unos === null) {
        console.log("Rezultat: " + trenutna())
        break
    }

    let broj = Number(unos)

    if(trenutna === null){
        trenutna = mnozi(broj)
    } else {
        trenutna = trenutna(broj)
    }

} while(true)
*/

// ____________________-Zadaci – objektno orijentirani JS-_______________________________________

// 4.

// Kreiraj konstruktor Kolegij s atributima (property)
// godina, semestar, kol1,
// kol2, ocjena_rez i dvije metode ocjena() i info().
// Funkcija ocjena() ispisuje postotak riješenosti => kol1*0.5 + kol2*0.5.
// Funkcija info() ispisuje poruku „Student na predmetu
// PWKS, {godina}. godina,
// {semestar}. semestar, ostvario je {ocjena_rez}%“.
// Kreirati dva objekta i postaviti vrijednosti pomoću
// konstruktora. Pozvati
// funkcije ocjena() i info() u oba objekta

function Kolegij(predmet, godina, semestar, kol1, kol2) {
    this.predmet = predmet
    this.godina = godina
    this.semestar = semestar
    this.kol1 = kol1
    this.kol2 = kol2
    this.ocjena_rez = 0

    this.ocjena = function() {
        this.ocjena_rez = this.kol1 * 0.5 + this.kol2 * 0.5
    }

    this.info = function() {
        console.log(`Student na predmetu ${this.predmet}, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez.toFixed(2)}%`)
    }

    this.infoStudent = function() {
        console.log(`Student ${this.ime} ${this.prezime} ima ${this.ocjena_rez.toFixed(2)}%`)
    }
}

let k1 = new Kolegij("PWKS", 2, 1, 80, 70)

k1.ocjena()
k1.info()

// 5.

// U prethodnom zadatku drugo kreiranom objektu dodati atribut ime, prezime i
// status. Ispisati poruku „Student {ime} {prezime} ima {formula}%“

let k2 = new Kolegij("Digitalni sustavi", 2, 1, 80, 70)


k2.ime = "Duje"
k2.prezime = "Mihaljević"
k2.status = "redovni"
k2.ocjena()
k2.infoStudent()

// 6.

// U prethodnom zadatku izbriši dodane atribute ime, prezime i status

delete k2.ime
delete k2.prezime
delete k2.status

k2.infoStudent()
