/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
    if(arguments.length === 2){
        return a * b;
    } else if(arguments.length === 1){
        return function later(b){
            return a * b;
        }
    }
}
console.log(specialMultiply(3));

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount){
    var answer = Math.floor(Math.random() * 11);
    var guesses = 0;
    return function guess(num){
        while(guesses != amount){
            if(num === answer){
                return "You got it!";
            } else if(answer < num){
                guesses++;
                return "Your guess is too high!";
            } else {
                guesses++;
                return "Your guess is too low!";
            }
        }
        return "You are all done playing!";
    }
}
var game = guessingGame(5);
console.log('0', game(0));
console.log('1', game(1));
console.log('2', game(2));
console.log('3', game(3));
console.log('4', game(4));
console.log('5', game(5));