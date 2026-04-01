// 1.
/*
function sredina(){
    const a = Number(prompt("Unesite prvi broj: "))
    const b = Number(prompt("Unesite drugi broj: "))
    const c = Number(prompt("Unesite treci broj: "))
    if (isNaN(a) || isNaN(b) || isNaN(c)){
        console.log("Greska!!")
        return sredina()
    }
    const rez = (a + b + c) / 3
    console.log(rez.toFixed(3))
}


sredina()
*/

// 2.
 /*
function sou(){
    let a = Number(prompt("Unesite prvi broj: "))
    let b = Number(prompt("Unesite drugi broj: "))
    let operator = prompt("Unesite operator(+,-,*,/): ")
    let arr = ["*", "+", "-", "/"]
    let rez

    if (isNaN(a) || isNaN(b)){
        console.log("Greska!!")
        return sou()
    }
    if (arr.includes(operator)){
        if (operator === "*"){
            rez = a*b
        }
        if (operator === "+"){
            rez = a + b
        }
        if (operator === "-"){
            rez = a - b
        }
        if (operator === "/"){
            if (b === 0){
            console.log("Greska!!")
            return sou()
            }
            rez = a / b
        }
    }else{
        console.log("Greska!!")
        return sou()
    }
    console.log(`Rezultat: ${rez}`)
}

sou()
*/

// 3.
/*
let unos = prompt("Unesite broj(10 znamenki): ")

if (isNaN(unos)){
    console.log("Greska unos nije broj!!!")
} else if (unos.length !== 10){
    console.log("Greska unos kraci od 10 znamenki!!!")
}else{
    rez = unos[0]
    console.log(`Prva znamenka je: ${rez}`)
}
*/


// 4.
/*
const unos = Number(prompt("Unesite mjesec(1-12): "))

switch(unos){
    case 1:
        doba = "Zima"
        console.log(doba)
        break
    case 2:
        doba = "Zima"
        console.log(doba)
        break
    case 3:
        doba = "Zima"
        console.log(doba)
        break
    case 4:
        doba = "Proljece"
        console.log(doba)
        break
    case 5:
        doba = "Proljece"
        console.log(doba)
        break
    case 6:
        doba = "Proljece"
        console.log(doba)
        break
    case 7:
        doba = "Ljeto"
        console.log(doba)
        break
    case 8:
        doba = "Ljeto"
        console.log(doba)
        break
    case 9:
        doba = "Ljeto"
        console.log(doba)
        break
    case 10:
        doba = "Jesen"
        console.log(doba)
        break
    case 11:
        doba = "Jesen"
        console.log(doba)
        break
    case 12:
        doba = "Jesen"
        console.log(doba)
        break
    default:
        console.log("Krivi unos, morate unijeti broj izmedu 1 i 12.")
    }
*/

// 5.
/*
const unos = prompt("Unesite broj: ")
const broj = prompt("Unesite koja ponavljanja trazimo: ")
let brojac = 0

for (let i = 0; i < unos.length; i++){
    if(unos[i] === broj){
        brojac++
        console.log(brojac)
    }
}
console.log(`U broju ${unos} imamo ${brojac} pojavljivanja broja ${broj}`)
*/
