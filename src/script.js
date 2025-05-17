const cards=document.getElementById("cards");
const sumDisplay=document.getElementById("sum");
const msg=document.getElementById("msg");
let card1,card2;
let sum=0;
function cardAssign () {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function start(){
    card1=cardAssign();
    card2=cardAssign();
    sum=card1+card2;
    showCard();
}
function showCard(){
    cards.innerText=` ${card1}  ${card2}`;
    sum.innerText=` ${sum}  `;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        // hasBlackJack = true
    } else {
        message = "You're out of the game!"
        // isAlive = false
    }
    msg.innerText=message;
}

