// // GUESS THE NUMBERS GAME 
// // - FEATURES & INSTRUCTIONS -

// // (USED TO HELP PROVIDE STRUCTURE AND OUTLINE OF PROGRAM)

// // Features
// // Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly.

// // If the player has an incorrect guess, display an alert message that informs the player:

// // Whether their guess is too high, or too low, and...
// // A list of all the previously guessed numbers (without showing the square brackets of an array).
// // If the player has guessed the secret number:

// // Display an alert message that congrats the player and informs them of how many guesses they took.
// // End the gameplay.
// // Tasks
// // Completing the following tasks will result in a working Guess the Number game:

// // Add a prevGuesses property to the game object initialized to an empty array.

// // Add a getGuess method to game that prompts the player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]:. Hint - use a template literal for the prompt message.

// // Ensure that the getGuess method returns a value that:

// // Is a number, not a string.
// // Is between smallestNum and biggestNum, inclusive.
// // Hints:
// // This is a great use case for a while loop.
// // parseInt returns NaN if the string cannot be parsed into a number.
// // From within the play method, invoke the getGuess method, and add the new guess to the prevGuesses array.

// // Add a render method to game that play will call after a guess has been made that alerts:

// // If the secret has been guessed:
// //  Congrats! You guessed the number in [x] guesses!
// // Otherwise:
// //  Your guess is too [high|low]
// //  Previous guesses: x, x, x, x
// // Hints:
// // render won't be able to access any of play's local variables, e.g., guess, so be sure pass render any arguments as needed.
// // Template literals not only have interpolation, but they also honor whitespace - including line breaks!
// // The list of previous guesses can be generated using the array join method.
// // The play method should end (return) when the guess matches secretNum.

// // Bonus
// // When play is run, immediately prompt the player to enter the smallest and biggest numbers instead of having them pre-set.
// // Super Bonus
// // Eliminate prompt and alert by writing this as an HTML/CSS/JS app!




// // Seeing how to to program this in class made this lab a lot easier, and it brought by some of the things I learned when creating my "Rock, Paper, Scissors" game in the pre-work. 

// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 0,
//     smallestNum: 0,
//     secretNum: null,
//     prevGuesses: [],

// // Play function
//     play: function() {
//       this.secretNum = Math.floor(Math.random() * 
//         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
//         let guess = NaN;
//         while (guess !== this.secretNum) {
//           guess = this.getGuess();
//           this.prevGuesses.push(guess)
//           this.render(guess);
//           if (guess === this.secretNum) return;
//         }
//     }
//   };

// // prevGuesses function
// getGuess: function() {
//   let guess = NaN;
//   while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
//     guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
//   }
//   return guess;
// }




// // Render function

// render: function(guess) {
//   if (guess === this.secretNum) {
//     var alert.array = [`Congrats! You guess the correct number in ${this.prevGuesses} guesses!`, `Yay! you did it in ${this.prevGuesses} guesses!`, `Good for you, it only took you ${this.prevGuesses} guesses.`, `Let's throw a party! you found the number in ${this.prevGuesses} guesses!`];
//     var a = Math.floor(math.random() * alert.array.length) 
//       :
//       `
//       Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
//       Previous guesses: ${this.prevGuesses.join(', ')}
//       `
//     ;
//     alert(msg);
//       }
//     } 
  

// game.play();

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let guess = NaN;
    while(guess !== this.secretNum) {
      guess = this.getGuess();
      this.prevGuesses.push(guess);
      this.render(guess);
      if (guess === this.secretNum) return;
    }
  },
  getGuess: function() {
    let guess = NaN;
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}: `));
    }
    return guess;
  },
 

  // for the life of me I had the hardest part with the render function. I tried reverse engineering your code vs other students using it/then statements, and I sort of understood theirs, but the syntax and set up of yours confuses me. I left it here so that I can easily return and evaluate it and pick it apart on Wednesday as I work on tic-tac-toe
  render: function(guess) {
    let msg = (guess === this.secretNum) ?
      `Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`
    :
      `
      Your guess is too ${guess > this.secretNum ? 'high' : 'low'}
      Previous guesses: ${this.prevGuesses.join(', ')}
      `
    ;
    alert(msg);
  }
};

game.play();