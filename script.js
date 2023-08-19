const resetBtn = document.querySelector(".reset-btn");
const rollBtn = document.querySelector(".roll-btn");
const dice = document.querySelector(".dice");

resetBtn.addEventListener("click", () => {
    dice.innerHTML = "";
});

rollBtn.addEventListener("click", () => {
    dice.innerHTML = "";
    randomNumLogic();
});

function randomNumLogic() {
    const randomNum = Math.floor(Math.random() * 6) + 1;

    if (randomNum === 1) {
        const diceCircle = `<div class="circle"></div>`;
        dice.innerHTML = diceCircle;
    } else if (randomNum === 2) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-2"></div>`;
            dice.innerHTML += diceCircle;
        }
    } else if (randomNum === 3) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-3"></div>`;
            dice.innerHTML += diceCircle;
        }
    } else if (randomNum === 4) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-4"></div>`;
            dice.innerHTML += diceCircle;
        }
    } else if (randomNum === 5) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-5"></div>`;
            dice.innerHTML += diceCircle;
        }
    } else if (randomNum === 6) {
        for (num = 0; num < randomNum; num++) {
            const diceCircle = `<div class="circle circle-6"></div>`;
            dice.innerHTML += diceCircle;
        }
    }
}