let suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]
let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"] 
let deck = []



function deckCombine(array1, array2) { // function that takes in 2 arrays and iterates through them, pushing the new string into "deck" array
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++)
        deck.push({
            suits: array1[i], 
            value: j,
            ranks: array2[j]
        })
    }
}

deckCombine(suits, ranks)  
// console.log(deck)



function shuffle(array) { // function that takes an array, and randomizes it
    for (let i = array.length - 1; i > 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array;
}

let shuffledDeck = shuffle(deck)
// console.log(shuffledDeck)



function dealCards(array) { // function that takes in array and pushes even indexes into 1 array(hand) and odds into another array(hand)
    for (let i = 0; i < array.length; ++i) {
        if (i % 2 === 0) {
            player1Hand.push(array[i]);
        } else {
            player2Hand.push(array[i]);
        }
    }
}
const player1Hand = []
const player2Hand = []

dealCards(shuffledDeck)
// console.log(player1Hand)
// console.log(player2Hand)



let team1Counter = 0;
let team2Counter = 0;



function compareArrays(a, b) { // function that iterates through and compares values of items in 2 arrays, awarding points based on higher values
    for (let i = 0; i < a.length; ++i)
        if (a[i].value > b[i].value) {
            team1Counter ++
            console.log(`Player1 has ${a[i].ranks} of ${a[i].suits} and beats Player2's ${b[i].ranks} of ${b[i].suits} --- Player 1 wins this round.`)
            console.log(`Player1 has ${team1Counter} point(s), Player2 has ${team2Counter} point(s).`)
        } else if (a[i].value < b[i].value) {
            team2Counter ++
            console.log(`Player2 has ${b[i].ranks} of ${b[i].suits} and beats Player1's ${a[i].ranks} of ${a[i].suits} --- Player 2 wins this round.`)
            console.log(`Player1 has ${team1Counter} point(s), Player2 has ${team2Counter} point(s).`)
        } else {
            console.log(`It's a tie! Player1 has ${a[i].ranks} of ${a[i].suits}, Player 2 has ${b[i].ranks} of ${b[i].suits}`)
    }

    if (team1Counter > team2Counter) {
        console.log(`With a score of ${team1Counter}, Player 1 has won the game. Congratulations!`)
    } else if (team2Counter > team1Counter) {
        console.log(`With a score of ${team2Counter}, Player 2 has won the game. Congratulations!`)
    } else {
        console.log("The game tied! Refresh the page to play again.")
    }
}


compareArrays(player1Hand, player2Hand)
console.log(team1Counter, team2Counter)