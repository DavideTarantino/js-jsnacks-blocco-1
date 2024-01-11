let N = prompt("Inserisci un numero:");
let cubi = [];

// Verifica se l'input è un numero valido
if (!isNaN(N) && N !== null) {
    N = parseInt(N);

    for (let i = 1; i <= N; i++) {
        let cubo = i ** 3;
        cubi.push(cubo);
    }

    console.log("I cubi dei primi", N, "numeri sono:", cubi);
    document.getElementById("responso").innerHTML = ("I cubi dei primi" + " " + N + " " + "numeri sono:" + cubi) ;
} else {
    console.log("Inserisci un numero valido.");
    document.getElementById("responso").innerHTML = ("Inserisci un numero valido :|")
}
