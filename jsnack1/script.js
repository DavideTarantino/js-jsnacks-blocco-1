let somma = 0;

for (let i = 0; i < 10; i++) {
    let input = prompt("Inserisci un numero:");
    
    // Converte l'input in un numero
    let numero = parseFloat(input);

    // Verifica se l'input è un numero valido
    if (!isNaN(numero)) {
        somma += numero;
    } else {
        // Se l'input non è un numero valido, richiede all'utente di inserire nuovamente il numero
        alert("Inserisci un numero valido.");
        i--; // Decrementa l'indice per ripetere la stessa iterazione del ciclo
    }
}
document.getElementById("responso").innerHTML = ("La somma di tutti i numeri inseriti è:" + somma);

