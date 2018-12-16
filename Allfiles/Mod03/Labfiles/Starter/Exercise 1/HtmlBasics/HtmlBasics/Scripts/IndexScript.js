﻿function init() {
    printArray(personsLst);
}

var personsLst = [
    {
        name: 'Adam adam',
        age: 22,
        email: 'adam@example.com'
    },
    {
        name: 'eve perkins',
        age: 18,
        email: 'eve@example.com'
    },
    {
        name: 'melvin wood',
        age: 20,
        email: 'melvin@example.com'
    },
    {
        name: 'signe lorenzo',
        age: 19,
        email: 'signe@example.com'
    },
    {
        name: 'william rasmussen',
        age: 25,
        email: 'william@example.com'
    }
];

init();

function getPersonsAboveAge(array, age) {
    var personAboveAge = [];

    for (let person in array) {

        if (person.age >= age) {
            personAboveAge.push(person);
        }
    }
    return personAboveAge;
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].name} (${array[i].age}) ${array[i].email}`);
    }
}
