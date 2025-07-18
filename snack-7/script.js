const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

const secondstudent = students.find(function (identificativo) { // Funzione Semplice
  if (identificativo.id === 2) {
    return identificativo
  }
});
console.log(secondstudent)



const studenteDue = students.find(identificativo => identificativo.id === 2); //funzione freccia 
console.log(studenteDue)