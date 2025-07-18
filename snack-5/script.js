const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


const numsEven = nums.filter(function (n) { //funzione semplice
  return n % 2 === 0

});
console.log(numsEven)


const numEven = nums.filter((n) => { //funzione freccia 
  return n % 2 === 0


});

console.log(numEven)