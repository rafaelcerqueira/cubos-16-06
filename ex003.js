//Quantas letras "a" contém numa determinada palavra:

const palavra = "developer";

let qtdLetrasA = 0;

for (let letra of palavra) {
    if (letra === "a") {
        qtdLetrasA++;
    }
}
if (qtdLetrasA === 0) {
    console.log('Não há nenhuma letra "a" nessa palavra.');
} else if (qtdLetrasA === 1) {
    console.log('Tem 1 letra "a" nessa palavra.');
} else {
    console.log(`Tem ${qtdLetrasA} letras "a" nessa palavra.`);
}