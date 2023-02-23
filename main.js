'use strict'

// Creo un ciclo for per far incrementare di 1, ad ogni iterazione, la i da 1 a 100 
for (let i = 1; i <= 100; i++) {
    // Controllo che il numero sia divisibile per 3 e per 5 (es: 15). Inizio da qui perchè è la condizione più specifica
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) { // Controllo che il numero sia divisibile per 3
        console.log('Fizz');
    } else if (i % 5 === 0) {  // Controllo che il numero sia divisibile per 5
        console.log('Buzz');
    } else {
        console.log(i); // Se il numero non rispetta nessuna delle 3 precedenti condizioni, stampo il valore di i
    }
}