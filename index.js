let firstCard = 10
let secondCard = 4
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let sum = firstCard + secondCard

function startGame() {
    if (sum < 21) {
        messageEl.textContent = "Do you wat to draw a card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You went over 21!"
        isAlive = false
    }

    cardsEL.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    let card = 7
    sum += card
    startGame()
}
