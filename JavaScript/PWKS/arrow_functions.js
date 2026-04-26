const numbers = [1, 2, 3, 4, 5, 6];

const rez = numbers.map((element) => Math.pow(element, 2));
const rez2 = numbers.map((element) => Math.pow(element, 3));
const even = numbers.filter((element) => element % 2 === 0);
const odd = numbers.filter((element) => element % 2 === 1);
const total = numbers.reduce((acc, element) => acc + element);
console.log(rez);
console.log(even);
console.log(odd);
console.log(total);
