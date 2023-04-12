let randomNumber = Math.random() * 100;
let randomNumber1 = Math.random() * 100;
let random = Math.floor(randomNumber);
let random1 = Math.floor(randomNumber1);


console.log(random); 
console.log(random1);

if ((random<random1) && (random<50)) {
    console.log( "Zahl 1 ist kleiner als Zahl 2 und Mini" );
}
else if ((random<30)||(random1<30)){
    console.log("Eine der beiden ist kleiner als 30" );
}
else if ((random<50) && (random1!=50)){
    console.log("Erste Zahl klein, zweite kein 50iger" );
}