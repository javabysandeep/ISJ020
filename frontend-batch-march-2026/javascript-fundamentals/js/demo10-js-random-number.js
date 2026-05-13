/*

    # Guess the number game
        - Use Math.floor and Math.random
        - Generate a number randomly in a range of 1 to 10
        - Use while loop with promt to get the input
        - Input == random
        - Keep the count and tell the use how many attempts it took to guess it right.
    Use break

*/
//Math.random() it will give a random number between 0 to 1
let attempts = 0;
let secretNumber = Math.floor(Math.random() * 10 + 1);
while(true){
     let input = prompt("Enter a number");
     attempts++;
     if(input==secretNumber){
        console.log(`you guessed the secret in ${attempts} attempts`);
        break;
     }
     
}