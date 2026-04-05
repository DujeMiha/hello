
/*
const umnožak = (a) => {
    return (b)  => {
        return (c) => {
            return a*b*c
        }
    }
}

console.log(umnožak(1)(2)(3))
*/


// Napiši currying funkciju zbroji koja
// zbraja samo troznamenkaste brojeve.

function zbroj(x) {
    let sum = 0

    function next(y){
        if (y === undefined) {
            return sum
        }

        if (y > 99 && y < 1000) {
            sum += y
        }
        return next
    }
    return next(x)
}

let trenutna = null

do{
    let unos = prompt("Unesite broj: ")

    if (unos === "" || unos === null) {
        console.log(trenutna())
        break
    }

    let broj = Number(unos)

    if(trenutna === null){
        trenutna = zbroj(broj)
    } else {
        trenutna = trenutna(broj)
    }
}while(true)
