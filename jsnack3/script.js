// Liste di nomi e cognomi dal Grande Gatsby
const nomi = ["Mario", "Simone", "Gerardo", "Osvaldo", "Nicola", "Giuseppe", "Michele", "Luigi", "Antonio", "Franco"];
const cognomi = ["Galasso", "Saporito", "Amatrudo", "Tarantino", "Pugliese", "Velardi", "Giordano", "Micera", "Pacilio", "Argenio"];

// Funzione per generare un nome casuale
function generaNomeCasuale() {
    const nomeCasuale = nomi[Math.floor(Math.random() * nomi.length)];
    const cognomeCasuale = cognomi[Math.floor(Math.random() * cognomi.length)];
    return `${nomeCasuale} ${cognomeCasuale}`;
}

// Numero di invitati desiderati
const numeroInvitati = 10;

// Genera la lista di invitati
const listaInvitati = [];
for (let i = 0; i < numeroInvitati; i++) {
    const invitato = generaNomeCasuale();
    listaInvitati.push(invitato);
}

// Stampa la lista di invitati
console.log("Lista di invitati:");
for (const invitato of listaInvitati) {
    console.log(invitato);
}
