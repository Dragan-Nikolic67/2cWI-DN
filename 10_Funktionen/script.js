let a = 23;
let b = 12;

function add (a,b){
    return a+b;
}
function sub (a,b){
    return a-b;
}
function mult (a,b){
    return a*b;
}
function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

console.log(supercalculation(a,b));

console.log(mult(a,b));

console.log(add(a,b));

console.log(sub(a,b));

function Ostern(year) {
    n = year - 1900
    a = n % 19
    b = ((7 * a + 1) / 19)
    m = (11 * a + 4 - b) % 29
    q = Math.floor (n / 4)
    w = (n + q + 31 - m) % 7
    p = Math.floor (25 - m - w)

    if (p > 0) {
        console.log("Ostersonntag ist der " + p + ". April");
    }
    else {
        console.log("Ostersonntag ist der " + p + 31 + ". März");
    }
}

Ostern(1956);