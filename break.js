//Percorrendo strings e break:

const palavra = "fullstack";

let encontrado = false;

for (let letra of palavra) {
    if (letra === 's') {
        encontrado = true;
        console.log("Tem a letra 'S'");
        //utiliza-se o break para parar o loop.
        break;
    }
}

if (!encontrado) {
    console.log("Não tem a letra 'S'");
}