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
let unos = prompt("Unesite broj(10 znamenki): ")
console.log(unos)
if (isNaN(unos)){
    console.log("Greska unos nije broj!!!")
} else if (unos.length !== 10){
    console.log("Greska unos kraci od 10 znamenki!!!")
}else{
    rez = unos[0]
    console.log(`Prva znamenka je: ${rez}`)
}

