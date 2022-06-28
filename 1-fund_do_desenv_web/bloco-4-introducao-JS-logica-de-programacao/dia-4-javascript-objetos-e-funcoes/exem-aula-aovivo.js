//imprimir todos os números pares entre 0 e 100 usando FOR tradicional
// Obs: Nesse caso não é possível usar o i++
for (let index = 2; index <= 100; index += 2) {
  console.log(index);
}

//Decompor uma string e gerar um array com suas palavras
let arquivoTexto = 'Rodrigo, Fabiana, Arthur, Joussemar, Pétala';
let arrayNomes = arquivoTexto.split(', ', 4);
console.log(arrayNomes);

let novaString = '';

for (nome of arrayNomes) {
  novaString += nome + '%'
}
console.log(novaString);




//Como pegar o maior número de um array de uma forma rápida (uma das soluções possíveis)
let numeros = [3, 7, 13, 9, 100, 45, 123, 3];

let maiorNumeros = Math.max.apply(null, numeros);

console.log(maiorNumeros);

for (numero of numeros) {
  console.log(numero * 3);
}





//O For OF nos permite 'caminhar' por todos os elementos do array, do primeiro até o último, sempre nessa sequencia e tem como resposta sempre o valor de cada posição do array
for (nome of arrayNomes) {
  novaString += nome + '%'
}
console.log(novaString);

for (nome of arrayNomes) {
  novaString += nome + '%'
}
console.log(novaString);




//Posso percorrer uma string com o FOR OF?
let senha = 'Robot@123';

for (let letra of senha) {
  console.log(letra);
}

//o FOR IN

for (let n in arrayNomes) {
  console.log('Index:', n, 'Valor do elemento:', arrayNomes[n]);
}

// Declarando e trabalhando objetos
let pessoa = {
  nome: 'João Pedro Alvim',
  idade: 20,
  localNascimento: 'Uberlândia',
  apelido: 'Alvim JP',
};

//FOR IN para caminhar por todas as chaves e valores do objeto
for (chave in pessoa){
  console.log('Chave: ', chave, 'Valor:', pessoa[chave]);
}

//console.log(pessoa.apelido);
console.log(pessoa['apelido']);
//FOR OF não funciona para caminhar na estrutura de um objeto
//for(chave of pessoa){
//  console.log(chave);
//}
//Incluir mais uma propriedade para o objeto
pessoa.endereco = {
  logadouro: 'Rua Estrela do Sul',
  numero: 123
}

console.log(pessoa);

// pessoa.endereco = endereco;