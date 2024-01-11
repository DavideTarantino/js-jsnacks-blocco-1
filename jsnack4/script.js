// Crea un array di numeri interi
let numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inizializza la somma a 0
let sommaDispari = 0;

// Calcola la somma degli elementi in posizione dispari
for (let i = 0; i < numeri.length; i++) {
    if (i % 2 !== 0) {
        sommaDispari += numeri[i];
    }
}

// Stampare la somma degli elementi in posizione dispari
console.log("La somma degli elementi in posizione dispari è:", sommaDispari);
document.getElementById("responso").innerHTML = ("La somma degli elementi in posizione dispari è:"+ sommaDispari);