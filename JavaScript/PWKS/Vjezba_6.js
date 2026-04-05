//ZDK 1.

// Pridijeliti stringu tekst „cascading style sheets“
// Izdvojiti prva slova svih riječi i pretvoriti ih u velika slova kako bi se dobila
// kratica CSS
// Dobivenu kraticu dodati na kraj stringa unutar zagrada, odnosno
// "cascading style sheets (CSS)"
/*
const string = "cascading style sheets"
var arr = string.split(" ").map(function (item) {
    return item[0]
}).join("").toLocaleUpperCase()

console.log(`${string}(${arr})`)
*/

// ZDK 2.

// Provjeri ispravnost datuma.
// test()
/*
let dateTime = /\d\d\-\d\d\-\d\d\d\d \d\d\:\d\d$/

console.log(dateTime.test("26-01-2018 17:32"))
console.log(dateTime.test("26-01-2018 17:322"))
*/

// ZDK 3.

// Provjeri ispravnost mail.
// mail()
/*
let email = "mihaduje123@gmail.com"
let regex = /^[\w\.]+@[\w]+\.[\w]{2,4}$/

if(email.match(regex)){
    console.log("Ispravan mail.")
} else {
    console.log("Nije uredu mail.")
}
*/

// ZDK 4.
// Pronalazi sve znakove koji nisu I ili i,
// odnosno n,f,o,r,m,a,c,j,s,k,a, ,t,e,h,n,o,l,o,g,j,a
// modifikator i (ignorecase) slovo i nije u
// povratnom stringu jer time označavamo da nije
// bitno je li slovo veliko ili malo
// ako napišemo /[^i]/i tada pronalazi prvu
// podudarnost, odnosno slovo n i dalje ne pretražuje

/*
let tekst = "Informacijska tehnologija"
let uz1 = /[^i]/gi
const rez = tekst.match(uz1)

console.log(rez.join(""))


// ZDK 5.
// Ispisati regularni izraz koji će dohvatiti vrijednost sa slike

let arr = ["12345", "88775544", "He He HE", "123mihaduje@gmail.com", "mihaduje@gmail.com", "Student nije biti lako!", "021 371 544", "0981234455"]

const regex = /^[\w\.]+@[\w]+\.[\w]{2,4}$/

for(let i = 0; i < arr.length; i++){
    if (arr[i].match(regex)){
        console.log(arr[i])
    }
}


// Zdk 1.
// Napiši regularni izraz kojim ćeš ispitati datum formata dd.dd.dddd.


const date = "20-12.2000."
const regex = /\d{2}\-\d{2}\.\d{4}\./

if (date.match(regex)){
    console.log("Ispravno!!!")
} else {
    console.log("Ne ispravno")
}

// Zdk 2.

// Napiši regularni izraz koji provjerava završava li email adresa sa riječi
// „com“.

const email = "1233@gmail.com"
const regex = /\.com/

if (email.match(regex)) {
    console.log("Ima .com")
} else {
    console.log("Nema .com")
}


// Zdk 3.
// Napiši regularni izraz koji provjerava počinje
// li rečenica velikim slovom

const sentence = "Zvo je recenica za provjeru!"

const regex = /^[A-Z]/

console.log(regex.test(sentence))


// Zdk 4.
// Napiši regularni izraz koji provjerava
// sadrži li rečenica riječ „Split“

const sentence = "Ova recencica ima u Split"
const regex = /Split$/

if (sentence.match(regex)) {
    console.log("Ima Split u sebi.")
} else {
    console.log("Nema Split u sebi.")
}


// Zdk. 5.
// Napiši regularni izraz koji provjerava
// ima li rečenica slova „x,y“ ili
// brojeve 1,2,3.

const regex = /[123xy]/gi

console.log(regex.test("Ova recenica sadrzi 1"))


// Zdk 6.
// Napiši regularni izraz koji provjerava
// završava li rečenica znakom“!“

const regex = /!$/

console.log(regex.test("ovo ima !"))


// Zdk 8.
// Provjeri sadrži li dani izraz riječ
// „KOP-“ i troznamenkasti broj učionice.

const regex = /KOP.\d{3}/gi

console.log(regex.test("Ovo ima KOP-123"))
*/
