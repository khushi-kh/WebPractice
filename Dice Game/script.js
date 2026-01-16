function diceGenerator(){
    let num = Math.random() * 6;
    num = Math.floor(num) + 1;
    return num;
}

let btn = document.getElementById("btn");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");


btn.addEventListener("click", function(){
    let num1 = diceGenerator();
    let num2 = diceGenerator();

    dice1.textContent = num1;
    dice2.textContent = num2;
})