const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const addone = numbers.map(function (add) { //funzione semplice
  return add + 1;
});
console.log(addone)


const addOneNumbers = numbers.map((addOnNumbers) => addOnNumbers + 1) //funzione freccia 
console.log(addOneNumbers)
