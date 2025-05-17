const cards = document.getElementById("cards");
const sumDisplay = document.getElementById("sum");
const msg = document.getElementById("msg");
let card1, card2;
let cardsArray = [];
let sum = 0;
hasBlackJack = false;
isAlive = true;
function cardAssign() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        hasBlackJack = false;
        isAlive = true;
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function start() {
    cards.innerText = "";
    sumDisplay.innerText = "";
    isAlive = true;
    card1 = cardAssign();
    card2 = cardAssign();
    cardsArray = [card1, card2];
    sum = card1 + card2;
    showCards();
}
function showCards() {
    cards.innerText = "";

    cardsArray.forEach(card => {
        cards.innerText += ` ${card}  `;
    });

    sumDisplay.innerText = `Sum: ${sum}  `;
    checkWin();
}
function checkWin() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    msg.innerText = message;


}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newcard = cardAssign()
        sum += newcard
        sumDisplay.innerText = `Sum: ${sum}  `;
        cardsArray.push(newcard)
        cards.innerText += ` ${newcard}  `;
        showCards();

    }
}