// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//prompt
//console.log
//if/else

//chiedo all'utente quanti km vuole percorrere e console.log
const howmanyKm = prompt('Quanti km si vogliono percorrere?');
console.log(howmanyKm);

//chiedo all'utente l'età e console.log
const userAge = prompt('età?');
console.log(userAge);

//Costo per km
let priceKm = 0.21
let priceKm_under = 0.17
let priceKm_over = 0.13

if (userAge <= 18) {
    const tot = priceKm_under * howmanyKm;
    console.log(tot);
} else if (userAge >= 65) {
    const tot = priceKm_over * howmanyKm;
    console.log(tot);
} else {
    const tot = priceKm * howmanyKm;
    console.log(tot);
}

// let result = document.getElementById('demo');
// console.log(result);
// result.innerHTML = 'Il costo del biglietto è: ' + tot + ' €';


