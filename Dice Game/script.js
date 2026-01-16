let rollBtn = document.getElementById("rollBtn");
let resetBtn = document.getElementById("resetBtn");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let headText = document.querySelector("h1")

function diceGenerator(){
    let num = Math.random() * 6;
    num = Math.floor(num) + 1;
    return num;
}

function rollDice(){
    let num1 = diceGenerator();
    let num2 = diceGenerator();

    dice1.textContent = num1;
    dice2.textContent = num2;

    if (num1===num2){
        headText.textContent = "Draw";
    }

    else if (num1 > num2){
        headText.textContent = "Player 1 Wins";
    }

    else headText.textContent = "Player 2 Wins";
}

function resetGame(){
    headText.textContent = "The Dice Game";
    dice1.textContent = 6;
    dice2.textContent = 6;
}

rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);