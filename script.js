const resetBtn = document.querySelector(".reset-btn");
const rollBtn = document.querySelector(".roll-btn");
const dice = document.querySelector(".dice");
const diceNum = document.querySelector(".diceNum");

resetBtn.addEventListener("click", () => {
    dice.innerHTML = "";
    diceNum.textContent = "";
});

rollBtn.addEventListener("click", () => {
    rollBtn.disabled = true;
    diceInterval();
});

function randomNumLogic() {
    dice.innerHTML = "";
    const randomNum = Math.floor(Math.random() * 6) + 1;

    if (randomNum === 1) {
        const diceCircle = `<div class="circle"></div>`;
        dice.innerHTML = diceCircle;
        diceNum.textContent = "1";
    } else if (randomNum === 2) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-2"></div>`;
            dice.innerHTML += diceCircle;
        }
        diceNum.textContent = "2";
    } else if (randomNum === 3) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-3"></div>`;
            dice.innerHTML += diceCircle;
        }
        diceNum.textContent = "3";
    } else if (randomNum === 4) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-4"></div>`;
            dice.innerHTML += diceCircle;
        }
        diceNum.textContent = "4";
    } else if (randomNum === 5) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-5"></div>`;
            dice.innerHTML += diceCircle;
        }
        diceNum.textContent = "5";
    } else if (randomNum === 6) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-6"></div>`;
            dice.innerHTML += diceCircle;
        }
        diceNum.textContent = "6";
    }

}

function diceInterval() {
    let counter = 0;
    const diceRandom = setInterval(() => {
        randomNumLogic();
        counter += 1;

        if (counter >= 20) {
            clearInterval(diceRandom);
            rollBtn.disabled = false;
        }
    }, 100);
    
}