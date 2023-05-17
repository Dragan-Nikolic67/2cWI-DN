let arr = [4,1,2,3];

arr.push(17);
arr.push(199);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }


let summe = arr.reduce((a, b) => a + b, 0);
console.log("Die Summe aller Werte beträgt:", summe);

let mittelwert = summe / arr.length;
console.log("Der Mittelwert der Zahlen beträgt:", mittelwert);

let freunde = ["Susi", "Paula", "Hans"];
let satz = "Meine Freunde sind " + freunde.join(", ");
console.log(satz);

freunde.push("Sepp");
satz = "Meine Freunde sind " + freunde.join(", ");
console.log(satz);
