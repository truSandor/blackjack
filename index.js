let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard


function startGame() {
    if (sum < 21) {
        message = "do you wat to draw a card?"
    } else if (sum === 21) {
        message = "Blackjack"
        hasBlackJack = true
    } else {
        message = "you went over 21!"
        isAlive = false
    }

    console.log(message)
}
