let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let Avgapple = 0.34;
let Avgbanana = 0.22;


let result = 1 / Avgapple
console.log("Ein Kilo Äpfel sind " + result + " Äpfel");

result = 1 / Avgbanana
console.log("Ein Kilo Bananen sind " + result + " Bananen")

result = applePricePerKilo * Avgapple
console.log("Ein Apfel kostet " + result + "€")

result = bananaPricePerKilo * Avgbanana
console.log("Eine Banane kostet " + result + "€")

result = (Avgapple * 8) * applePricePerKilo
console.log("8 Äpfel kosten " + result + "€");

result = (Avgbanana * 17) * bananaPricePerKilo
console.log("17 Bananen Kosten " + result + "€");

result = 1000 * applePricePerKilo
console.log("Eine Tonne Äpfel kostet " + result + "€");
result = 1000 / Avgapple
console.log("Eine Tonne Äpfel sind " + result + " Äpfel");

result = 1000 * bananaPricePerKilo
console.log("Eine Tonne Bananen kostet " + result + "€");
result = 1000 / Avgbanana
console.log("Eine Tonne Bananen sind " + result + " Bananen");