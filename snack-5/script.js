const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


const numsEven = nums.filter(function (n) { //funzione semplice
  if (n % 2 === 0) {
    return n
  }
});
console.log(numsEven)


const numEven = nums.filter((n) => { //funzione freccia 
  if (n % 2 === 0)
    return n

});

console.log(numEven)