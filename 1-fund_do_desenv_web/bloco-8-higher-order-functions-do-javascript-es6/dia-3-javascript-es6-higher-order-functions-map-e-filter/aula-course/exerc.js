// const books = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: {
//         name: 'George R. R. Martin',
//         birthYear: 1948,
//       },
//       releaseYear: 1991,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: {
//         name: 'J. R. R. Tolkien',
//         birthYear: 1892,
//       },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Isaac Asimov',
//         birthYear: 1920,
//       },
//       releaseYear: 1951,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: {
//         name: 'Frank Herbert',
//         birthYear: 1920,
//       },
//       releaseYear: 1965,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: {
//         name: 'Stephen King',
//         birthYear: 1947,
//       },
//       releaseYear: 1986,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: {
//         name: 'H. P. Lovecraft',
//         birthYear: 1890,
//       },
//       releaseYear: 1928,
//     },
//   ];
  
//   // Adicione o código do exercício aqui:


// const livroGeneroNome = (arrayOrdenada) => { arrayOrdenada.map(element) => {
  
// }
// }


// const products = [
//   {
//     name: 'laptop',
//     price: 1000,
//     id: 3,
//   },
//   {
//     name: 'desktop',
//     price: 1500,
//     id: 2,
//   },
//   {
//     name: 'phone',
//     price: 500,
//     id: 1,
//   },
// ];

// console.log(products.sort(products.name));


// const adultos = [
//   {
//     peso: 100,
//     altura: 1.85,
//   },
//   {
//     peso: 90,
//     altura: 1.72,
//   },
//   {
//     peso: 79,
//     altura: 1.99,
//   },
// ];

// // IMC = Índice de Massa Corporal

// function IMC(adulto) {
//   return parseFloat((adulto.peso/(Math.pow(adulto.altura,2))).toFixed(2));
// }

// console.log(adultos.(IMC));



const cart = [
  {
    name: "laptop",
    price: 1000,
    quantity: 2,
    id: 3,
  },
  {
    name: "desktop",
    price: 1500,
    quantity: 1,
    id: 2,
  },
  {
    name: "phone",
    price: 500,
    quantity: 3,
    id: 1,
  },
];

const valorInicial = 0;
const totalCart = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, valorInicial);



// fim do código

console.log(totalCart);

