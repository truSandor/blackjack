let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let hasBlackJack = false
let isAlive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let sum = firstCard + secondCard

function startGame(){
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        messageEl.textContent = "Do you wat to draw a card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got a Blackjack!"
        hasBlackJack = true
    } else {
        messageEl.textContent = "You went over 21!"
        isAlive = false
    }

    cardsEL.textContent = "Cards: " + cards.join(" ")
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 13) // ace = 1, J = 11, Q = 12, K = 13 -- these are no the values just indexes
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
