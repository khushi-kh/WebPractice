let rollBtn = document.querySelector(".roll");
let resetBtn = document.querySelector(".reset");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let headText = document.querySelector("h1");

function diceGenerator(){
    return Math.floor(Math.random() * 6) + 1;
}

function setDiceFace(dice, num){
    dice.className = dice.className.replace(/face-\d/g, "").trim();
    dice.classList.add(`face-${num}`);
}

function rollDice(){
    let num1 = diceGenerator();
    let num2 = diceGenerator();

    setDiceFace(dice1, num1);
    setDiceFace(dice2, num2);

    if (num1 === num2){
        headText.textContent = "Draw";
    }
    else if (num1 > num2){
        headText.textContent = "Player 1 Wins 🎉";
    }
    else{
        headText.textContent = "Player 2 Wins 🎉";
    }
}

function resetGame(){
    headText.textContent = "The Dice Game";
    setDiceFace(dice1, 6);
    setDiceFace(dice2, 6);
}

rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);
