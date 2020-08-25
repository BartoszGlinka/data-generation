const fs = require('fs');

const genders = ['male', 'female']
const maleNames = ['Adam', 'Kacper', 'Tomasz', 'Rober']
const femaleNames = ['Anna', 'Ola', 'Ewa', 'Zosia']
const lastNames = ['Nowak', 'Kowalski', 'Zyzio', 'Dyzio']

function randChoice(arr){
  return arr[Math.floor(Math.random() * 2)];
}

const people = [];

for (let i = 0; i <= 20; i++) {
  const newPerson = {}
  const gender = randChoice(genders);
  let name = 'test';
  const lastName = lastNames[Math.floor(Math.random() * 4)]
  const age = Math.floor(Math.random()*60)+18;

  if (gender == 'male') {
    name = randChoice(maleNames);
  } else {
    name = randChoice(femaleNames);  
  }
  
  const email = `${name.toLowerCase() + '.' + lastName.toLowerCase() + '@gmail.com' }` 

  newPerson.gender = gender;
  newPerson.name = name;
  newPerson.lastName = lastName;
  newPerson.age = age;
  newPerson.email = email

  people.push(newPerson);
  }

  const peopleJSON = JSON.stringify(people);

  fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) throw err;
      console.log('File has been successfully generated! Check people.json');
  });

