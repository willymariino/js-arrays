const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
teachers.reverse();
console.log(teachers);
const reversedTeachers = teachers;

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri



// 3. Rimuovi 'Ed' dall'array teachers
const splicedTeacher = teachers.splice(1); //non ho capito perchè negli esempi in rete usavano due 1 tipo: splice(1, 1)
console.log(splicedTeacher);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

const isFabioPresent = teachers.includes('Fabio');
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const combinedArray = array1.concat('Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca')
const teachersString = combinedArray.join(',');
console.log(teachersString);