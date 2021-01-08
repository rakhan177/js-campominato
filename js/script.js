/*Descrizione
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati (tadaaa!)
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

// funzione per numeri randomici
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// funzione di controllo identicità
function controlNumber(arr, num) {
  return (arr.indexOf(num) === -1);
}

// variabili e array
var container = document.getElementById('container');
var livello = 0;
var arrayRandom = [];
var arrayUtente = [];
var numeroUtente;

// chiedo difficoltà all' UTENTE
var difficolta = prompt('Vuoi giocare facile, medio o difficile');

// controllo che non abbia scritto cazzate
if(difficolta !== 'facile' && difficolta !== 'medio' && difficolta !== 'difficile'){
  alert('Dai non sei simpatico!');
}else if(difficolta === 'facile'){
  livello = 1;
}else if(difficolta === 'medio'){
  livello = 2;
}else if(difficolta === 'difficile'){
  livello = 3;
}

// in base a livello scelto genero tre array diversi
if(livello === 3){
  while (arrayRandom.length < 16) {
    numeroRandom = randomNumber(1, 50);
    // controllo che il num generato sia diverso da quelli pushati prima
    if (controlNumber(arrayRandom, numeroRandom)) {
      // se è vero pusho
      arrayRandom.push(numeroRandom);
    }
  }
  console.log(arrayRandom);
}else if(livello === 2){
  while (arrayRandom.length < 16) {
    numeroRandom = randomNumber(1, 80);
    // controllo che il num generato sia diverso da quelli pushati prima
    if (controlNumber(arrayRandom, numeroRandom)) {
      // se è vero pusho
      arrayRandom.push(numeroRandom);
    }
  }
  console.log(arrayRandom);
}else{
  while (arrayRandom.length < 16) {
    numeroRandom = randomNumber(1, 100);
    // controllo che il num generato sia diverso da quelli pushati prima
    if (controlNumber(arrayRandom, numeroRandom)) {
      // se è vero pusho
      arrayRandom.push(numeroRandom);
    }
  }
  console.log(arrayRandom);
}

//chiedo all' utente di inserire numeri fino a quando non sbaglia!!
while (!arrayRandom.includes(numeroUtente)) {
  numeroUtente = Number(prompt('Inserisci un numero da 1 a 100'));
  // controllo che non scriva cazzate
  if(isNaN(numeroUtente)){
    alert('Ti sembra un numero?')
  }/*eseguo controllo identicità*/else if (controlNumber(arrayUtente, numeroUtente)) {
    arrayUtente.push(numeroUtente);
    console.log(arrayUtente);
  }
}

// hai perso!!!!!!!!!
container.style = 'display: flex';
