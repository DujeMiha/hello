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



