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

function playRound(playerChoice,computerChoice){
    playerChoice = playerChoice.toLowerCase()
    console.log(playerChoice)
}

console.log(getComputerChoice())
console.log(playRound("ROCK","paper"))