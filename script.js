console.log('Hello World')

/*const player = prompt('what is your name dear player ?')

const rightPrice = Math.floor(Math.random() * 100) + 1;
//console.log(rightPrice)
let n = prompt('your turn to guess the right price ?')

while (n !== rightPrice){
    n > rightPrice console.log('it is less'); 
    n < rightPrice console.log('it is more');
    n == rightPrice console.log(player + 'wins');
}*/

const playerName = parseInt(prompt('whats your name ?'));
const randomNumber = Math.floor(Math.random() * 100) + 1;

let playserHasWon = false

while (!playserHasWon) {
    const playerGuess = parseInt(prompt ('whats your guess ?'));

 if (playerGuess < randomNumber){
    alert('more');
} else if (playerGuess > randomNumber){
    alert('less');
} else if (playerGuess === randomNumber){
    alert (playerName + ' wins');  
playserHasWon = true; 
}
}