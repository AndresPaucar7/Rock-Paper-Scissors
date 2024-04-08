function randomChoice(){
    // use floor method to round down
    let choice = Math.floor(Math.random() * 3);

    if(choice === 0){
        return "rock";
    }else if(choice === 1){
        return "paper";
    }else{
        return "scissors"
    }
}
console.log(randomChoice());

function winner(player1, player2){
    if(player1 == player2){
        return "It's a tie"
    }else if(
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "scissors")
    ){
        return "Player 1 Wins!";
    } else {
        //any other outcome means player2 has won
        return "Player 2 Wins!"
    }
}