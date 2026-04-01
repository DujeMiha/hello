// 1.
/*
let arr = [1, 2, 3, 4, 5, 6, 7]
zbroj = 0

arr.pop() // izbriši zadnji element niza
arr.push(10) // dodaj element na kraj niza
arr.unshift(10) // Dodaje element na pocetak niza
arr.splice(arr.length - 1, 0, 110) // zamjeni zadnji element
arr.splice(1, 1) // izbrisi drugi element
arr.splice(1, 1, 111) // izmjeni drugi element
for(let i = 0; i < arr.length; i++){
    zbroj = zbroj + arr[i]
}
for(let i = 0; i < arr.length; i++){
    console.log(`Broj na indexu ${i} je ${arr[i]}`)
}

console.log("Zbroj: " + zbroj)
console.log(arr)
*/

// 2.
/*
const trgovina = [
    {
        "Naziv_proivoda": "jabuka",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 5,
    "popust": 20,
    },
    {
        "Naziv_proivoda": "banana",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 5,
    "popust": 20,
    },
    {
        "Naziv_proivoda": "zobene",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 500,
    "popust": 20,
    }
]

const rez = trgovina.filter(da)

function da(proizvod){
    return proizvod.Kolicina < 50
}
console.log(rez)
*/

// 3.
/*
const trgovina = [
    {
        "Naziv_proivoda": "jabuka",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 5,
    "popust": 20,
    },
    {
        "Naziv_proivoda": "banana",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 5,
    "popust": 20,
    },
    {
        "Naziv_proivoda": "zobene",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 500,
    "popust": 20,
    }
]

const rez = trgovina.reduce(zbroj, 0)

function zbroj(total, trgovina){
    return total + trgovina.Cijena
}

console.log(rez)
*/

// 4.

const trgovina = [
    {
        "trgovina": "konzum",
        "Naziv_proivoda": "jabuka",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 5,
    "popust": 20,
    },
    {
        "trgovina": "spar",
        "Naziv_proivoda": "banana",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 5,
    "popust": 20,
    },
    {
        "trgovina": "lidl",
        "Naziv_proivoda": "zobene",
    "Godina_proizvodnje": 2013,
    "Cijena": 2,
    "Kolicina": 500,
    "popust": 20,
    }
]

const rez = trgovina.map(da)

function da(trgovina){
    return trgovina.trgovina
}

console.log(rez)
