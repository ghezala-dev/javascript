const playerGuess = 8
const correctAnswer = 6

/*
Challenge
1. improve the functionality of this code by letting the player know if their guess was too high, too low, or exactly right.
*/

const message = playerGuess < correctAnswer ? 'Too low!' 
    : playerGuess > correctAnswer ? 'Too high!' 
    : 'Exactly right!'

console.log(message)v