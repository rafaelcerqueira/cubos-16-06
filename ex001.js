//criar array com 5 nomes de países:
const paises = ['Brasil', 'Canadá', 'Austrália', 'Nova Zelândia', 'Alemanha'];

//Adicionar um país no final da lista:
paises.push('Inglaterra');

//Imprimir na tela:
console.log(paises);

//Remova um país do fim da lista:
paises.pop();

//Imprimir na tela:
console.log(paises);

//Adicionar um país no início da lista:
paises.unshift('Irlanda');

//Imprimir na tela:
console.log(paises);

//Remover um país do início da lista:
paises.shift();

//Imprimir na tela:
console.log(paises);

//Imprimir o último país da lista:
const ultimoItem = paises[paises.length - 1]
console.log(ultimoItem);

//Imprimir o segundo país da lista:
console.log(paises[1]);

//Imprimir o último país da lista:
console.log(paises[2]);