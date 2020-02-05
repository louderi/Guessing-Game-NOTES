let DoTheThing = function() {

    //1) Computer picks a number

    /* Loops have three parts: CONTROL VARIABLE, CONTROL BOOLEAN EXPRESSION, CONTROL INCREMENT/DECREMENT/UPDATE

    CONTROL VARIABLE - Controls when the loop executes.

    CONTROL BOOLEAN EXPRESSION - Boolean expression using the control variable which should at some point evaluate to false

    CONTROL IDU - Assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false.
     */


    let restart = "Yes";
    while (restart === "Yes") {
        let computerNumber = Math.floor((Math.random() * 10) + 1);

        let playersGuess = parseInt(prompt("Guess a number between 1 and 10"), 10);
        while(playersGuess != computerNumber){
        if(playersGuess > computerNumber){
            playersGuess = parseInt(prompt("Too high !"),10);
        } else
            playersGuess = parseInt(prompt("Too low !"),10);

        }

        alert("You win! Play again ?")

        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)")
    }



  //2) Alert to get player's guess
  //3) Compare guess to number
  //4) If higher - Alert "Too high!" and then get player's guess | repeat
  //4A) If lower - Alert "Too low!" and then get player's guess  | repeat
  //4B) If correct - alert "You win! Play again?"
    //5) If yes - Repeat from beginning
    //6) If no - Don't repeat

};

let DoTheOtherThing = function(){

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart, playersGuess;

    do{
        let computerNumber = Math.floor((Math.random()*10)+1);
        do{
            if(playersGuess > computerNumber){
                playersGuess = parseInt(prompt("Too high !"),10);
            } else
                playersGuess = parseInt(prompt("Too low !"),10);

        }while(playersGuess !== computerNumber);
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)")
    }while(restart === "Yes");








};