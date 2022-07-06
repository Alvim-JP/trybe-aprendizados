const numerosPrimos = [];

for (let i = 2; i <= 50; i += 1) {
  let quantity = 0;
  for (let j = 0; j <= i; j += 1) {
    if (i % j === 0) {
        quantity++
    }
  }

  if (quantity === 2) {
    numerosPrimos.push(i)
  }
}
console.log('O maior numero é :' + numerosPrimos[numerosPrimos.length - 1]);