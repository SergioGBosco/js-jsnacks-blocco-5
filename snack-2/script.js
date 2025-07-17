const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

people.forEach(function (showname) { //funzione semplice

  console.log(showname.name)

})

people.forEach(showname => console.log(showname.name)) // funzione freccia 