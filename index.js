
let player = {
    name: "Hosh",
    chips: 190
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


console.log(cards)

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard > 10){
        return 10
    } else if (randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}


function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    isAlive = true
    
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20){
        message = "Do you want to draw a new card?"
        hasBlackJack = false
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        hasBlackJack = false
    }
    
    messageEl.textContent = message
    console.log(message)
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        console.log(cards)
    }
}

//console.log(hasBlackJack)
//console.log(isAlive)
