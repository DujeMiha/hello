// 1.

// Kreirati niz koji će sadržavati deset slučajno generiranih brojeva u
// intervalu od 100 do 200, zaokruženih na najbliži cijeli broj. Sortirati
// elemente niza od manjeg prema većem funkcijom sort(). Obratiti
// pozornost kod sortiranja numeričkih i tekstualnih elemenata.

/*
let arr = []

for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random() * 99) + 100)
}

console.log(arr.sort().reverse())
*/

// 2.

// Omogućiti unos brojeva dok se ne unese 0. Zbrojiti parne i neparne
// brojeve koristeći se closure funkcijom arrow zapisa. Zabranjeno je
// koristiti nizove.

/*
const zbroj = () => {
    let parni = 0
    let neparni = 0

    return provjera = (broj) => {
        if (broj === 0){
            console.log(`Zbroj parnih je ${parni}`)
            console.log(`Zbroj neparnih je ${neparni}`)
            return
        }
        if (broj % 2 === 0){
            parni += broj
        } else if (broj % 2 === 1){
            neparni += broj
        } else{
            return
        }
    }
}

const unosbroja = zbroj()

let broj

do {
    broj = Number(prompt("Unesite broj (nula za kraj): "))
    unosbroja(broj)
} while(broj !== 0)
*/

// 3.

// Kreirati closure funkciju koja vraća poruku „Programirati nije teško“.
/*
function hello(){
    message = "HELLO"

    function da(){
        console.log(message)
    }
    da()
}

hello()
*/

// 4.
/*
// Prepiši programski k𝑜̂d i objasni što se događa.

function sum(a){ // isto kao da smo napisali let ili const a = 10 unutar funckije

    return (b, c) => {
        return a * b * c
    }
}

let x = sum(10);// samo bi trebali izbrisat ovdje 10

console.log(x(3,12));
// ili
console.log(sum(10)(3,12)); // i ovdje iako nebi mjenjalo rezultat
*/

// 5.

// Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije s
// promjenjivim brojem argumenata u formatu (a)(b)(c)… koja bi trebala
// vratiti umnožak pozitivnih brojeva manjih od 20.

const umnožak = (a) => {
    return (b) => {
        return (c) => {
            return a*b*c
        }
    }
}
while(true){
    let a = Number(prompt("Unesite prvi broj: "))
    let b = Number(prompt("Unesite drugi broj: "))
    let c = Number(prompt("Unesite treci broj: "))
    if (a > -1 && b > -1 && c > -1){
        if (umnožak(a)(b)(c) < 20 && umnožak(a)(b)(c) >= 0){
        console.log(`Umnozak od ${a},${b} i ${c} je jedanko ${umnožak(a)(b)(c)}`)
        break
        }
    }
}
