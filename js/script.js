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

// funzione genera numero random
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
}

// funzione di controllo identicità numeri
function controlRepeat(arr, num){
  return (!arr.includes(num));
}

// funzione di controllo numeri possibili
function controlNumberIsNumber(num, num1){
  if(!isNaN(num) && (num >= 1 && num <= num1) && num.toString().indexOf('.') === -1){
    return true;
  }
}

// definizioni variabili dom
var container = document.getElementById('container');
var vittoria = document.getElementById('vittoria');
var sconfitta = document.getElementById('sconfitta');

// definizione variabii
var arrayRandom = [];
var numeroRandom;
var arrayUtente = [];
var numeroUtente;
var difficoltà;
var limite;

// chiedo difficoltà all' UTENTE
difficoltà = Number(prompt('Vuoi giocare: facile=1, medio=2 o difficile=3 ?'));

// lo obbligo a scrivere un numero corretto
while(!controlNumberIsNumber(difficoltà, 3)){
  alert('Inserisci un numero che corrisponda alla difficoltà di gioco!!!');
  difficoltà = Number(prompt('Vuoi giocare: facile=1, medio=2 o difficile=3 ?'));
  }

// in base alla difficoltà scelta stabilisco un limite
switch(difficoltà){
  case (1):
  limite = 100;
  break;
  case (2):
  limite = 80;
  break;
  case (3):
  limite = 50;
}

// genero array in base al limite imposto dalla difficoltà
while(arrayRandom.length < 16){
  numeroRandom = randomNumber(1, limite);
  if(controlRepeat(arrayRandom, numeroRandom)){
    arrayRandom.push(numeroRandom);
  }
}
console.log(arrayRandom);

// chiedere all' utente 84 volte di inserire un numeroRandom
while(arrayUtente.length < 84 && controlRepeat(arrayRandom, numeroUtente)){
  numeroUtente = Number(prompt('Inserisci un numero da 1 a 100'));
  if(controlNumberIsNumber(numeroUtente, 100)){
    controlRepeat(arrayRandom, numeroUtente);
    arrayUtente.push(numeroUtente);
  }else{
    alert('Inserisci un NUMERO INTERO da 1 a 100!');
  }
}

// condizioni di vittoria/sconfitta
if(arrayUtente.length === 84){
  alert('Incredibbbbbbile....hai guardato la console vero?');
  container.style = 'display: block';
  vittoria.style = 'display: flex';
}else{
  container.style = 'display: block';
  sconfitta.style = 'display: flex';
}
