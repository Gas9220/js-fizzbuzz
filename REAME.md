Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Considerazioni
- Per eseguire l'operazione, devo usare un ciclo for.
- Il ciclo dovra partire da 1 e proseguire finchè il valore di i non sarà maggiore o uguale a 100. Ad ogni ciclo incremento la i di 1.
- Ad ogni ciclo, la i acquisirà un nuovo valore, devo quindi verificare diverse condizioni e stampare in console il risultato appropriato.

1. Dentro il ciclo creo un if
 - La prima condizione che devo verificare è se il numero sia divisibile per 3 o per 5 in quanto essendo la condizione più specifica, va verificata all'inizio. Nel caso in cui la condizione si verifichi stampo "FizzBuzz" | IF
 - La seconda condzione che devo verificare è se il numero sia divisibile per 3 e caso in cui si verifichi stampo "Fizz" | ELSE IF
 - La terza condzione che devo verificare è se il numero sia divisibile per 5 e caso in cui si verifichi stampo "Buzz" | ELSE IF
 - Le condizioni dove verifico se il numero sia divisibile per 3 o per 5 possono essere invertite.
 - Se non si verifica nessuna nessuna delle condizioni precedenti, stamperò il valore di i | ELSE