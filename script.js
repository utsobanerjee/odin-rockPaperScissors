console.log("Hi")
let options = ["rock","paper","scissor"]

function getComputerChoice(){
        /*
        1.math.random() generates a floating point number from 0 to 1
        2.if that number is multiplied by the length , the answer will always
        lie between 0 to n , where n is not inclusive as 1 is not inclusive in the
        random function
        3.we use floor function to make the number lie between the index numbers of the array as n-1
        will be highest value it can get through the floor function.
        */

        let randomNumber = Math.random()
        let randomIndex = Math.floor(randomNumber * options.length)
        return options[randomIndex]
}

// playRound plays one round of game and returns the result of who wins in a string

function playRound(playerChoice,computerChoice){

    if(playerChoice === "rock" && computerChoice === "scissor"){
        return `You win! Your choice was ${playerChoice} , Computer's choice was ${computerChoice}\n ${playerChoice} beats ${computerChoice}`
    } else if(playerChoice === "scissor" && computerChoice === "paper"){
        return `You win! Your choice was ${playerChoice} , Computer's choice was ${computerChoice}\n ${playerChoice} beats ${computerChoice}`
    }else if(playerChoice === "paper" && computerChoice ==="rock"){
        return `You win! Your choice was ${playerChoice} , Computer's choice was ${computerChoice}\n ${playerChoice} beats ${computerChoice}`
    } else if(playerChoice === computerChoice){
        return `It's a tie! Both you entered ${playerChoice}`
    } else {
        return `You loose! Your choice was ${playerChoice} , Computer's choice was ${computerChoice}\n ${computerChoice} beats ${playerChoice}`
    }
    
}

// to check if the input user gave is valid or not 
function checkValid(playerChoice){
    if(playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() ==="paper" || playerChoice.toLowerCase() ==="scissor"){
        return true;
    }else {
        return false;
    }

}
// plays 5 rounds if of the game , keeps the track of the scorecard , displays who wins after every round of session
// displays scores for both in each round in the console
// returns who wins after 5 rounds
function playGame(){
    let playerScore =0;
    let computerScore =0;

    alert("Starting a game of 5 rounds between you and computer!")

    for (let i=0; i<5 ; i++){
        let playerChoice = prompt("rock , paper or scissor ?");
        let computerChoice = getComputerChoice();

        //If user enters invalid choice back to back the program needs to ask for a valid choice till when it gets one
        while(!checkValid(playerChoice)){
            playerChoice = prompt("Enter a valid choice")
        }
        playerChoice = playerChoice.toLowerCase();
        
        let result = playRound(playerChoice,computerChoice);
        if(result.match(/win/i)){
            alert(result);
            playerScore++;
            alert(`${i+1} round , Computer Score is ${computerScore} and Your Score is ${playerScore}`);
        }else if(result.match(/loose/i)){
            alert(result);
            computerScore++;
            alert(`${i+1} round , Computer Score is ${computerScore} and Your Score is ${playerScore}`);
        }else if(result.match(/tie/i)){
            alert(result);
            alert(`${i+1} round , Computer Score is ${computerScore} and Your Score is ${playerScore}`);
        }
    }
    if(playerScore === computerScore){
        alert("It's a tie");
    } else if(playerScore > computerScore){
        alert("You win");
    } else {
        alert("Computer wins");
    }
}

playGame()