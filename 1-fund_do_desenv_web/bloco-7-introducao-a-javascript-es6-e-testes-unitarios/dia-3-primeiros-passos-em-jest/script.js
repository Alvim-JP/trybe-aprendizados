const sum = (n1, n2) => n1 + n2;
const divisao = (n1, n2) => n1/n2;
const summationOf = (number) => {
  if(typeof number !== 'number') {
    throw new Error('Essa função só aceita números como parametro');
  }
  let summation = 0;
  for(let index = 0; index <= number; index += 1){
    summation += index;
  }
  return summation;
};

// console.log(summationOf());
module.exports = { sum, summationOf, divisao };
