'use strict'

// Creo un riferimento alla lista 
const fizzBuzzListElement = document.getElementById('fizz-buzz-list')

// Creo un ciclo for per far incrementare di 1, ad ogni iterazione, la i da 1 a 100 
for (let i = 1; i <= 100; i++) {
    // Creo un elemento li
    const li = document.createElement('li');

    // Lo aggiungo alla lista
    fizzBuzzListElement.appendChild(li)

    // Controllo che il numero sia divisibile per 3 e per 5 (es: 15). Inizio da qui perchè è la condizione più specifica
    if (i % 3 === 0 && i % 5 === 0) {
        // Assegno a li un id
        li.setAttribute('id', 'fizz-buzz-item');
        // Scrivo dentro li
        li.innerHTML = "FizzBuzz"
        // Stampo in console il valore
        console.log('FizzBuzz');
    } else if (i % 3 === 0) { // Controllo che il numero sia divisibile per 3
        // Assegno a li un id
        li.setAttribute('id', 'fizz-item');
        // Scrivo dentro li
        li.innerHTML = "Fizz"
        console.log('Fizz');
    } else if (i % 5 === 0) {  // Controllo che il numero sia divisibile per 5
        // Assegno a li un id
        li.setAttribute('id', 'buzz-item');
        // Scrivo dentro li
        li.innerHTML = "Buzz"
        // Stampo in console il valore
        console.log('Buzz');
    } else {
        // Assegno a li un id
        li.setAttribute('id', 'item');
        // Scrivo dentro li
        li.innerHTML = i
        // Stampo in console il valore
        console.log(i); // Se il numero non rispetta nessuna delle 3 precedenti condizioni, stampo il valore di i
    }
}