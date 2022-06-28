//Declarar uma função através da diretiva Function
function imprimeMensagemBoaVindas() {
  console.log('Seja muito bem vindo!!');
}

imprimeMensagemBoaVindas();

function imprimeMensagemBoaVindasComNome(nome) {
  console.log('Seja muito bem vindo', nome);
}

imprimeMensagemBoaVindasComNome('Alvim');
imprimeMensagemBoaVindasComNome('Bia');
//Chamando uma função

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(19, 7));


//Evita repetição de código

//verificar se a pessoa pode dirigir considerando regras diferentes para EUA com idade minima de 16 anos, Brasil 


//Criar um array de objetos com base nos arrays nomes e idades abaixo
let nomes = ['Marcos', 'Dirlei', 'Joseli', 'Letícia', 'Manoela', 'Carla'];

let idades = [23, 51, 41, 18, 27, 33];

// a função deve montar um array conectando o nome com a idade seguindo a
// ordem dos elementos em cada array, posição 0 do array nomes com a posição 0
// do array de idades: { nome: 'Marcos', idade: 23 }

function nomesEIdades(arrayNomes, arrayIdades) {
  let arrayNomesEIdades = [];
  for (let index = 0; index < arrayNomes.length; index += 1) {
    arrayNomesEIdades.push({ nome: arrayNomes[index], idade: arrayIdades[index] })
  }
  return arrayNomesEIdades;
}
console.log(nomesEIdades(nomes, idades));



