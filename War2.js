class Deck {
    constructor() {
        this.deck = []
        this.suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"]
        this.values = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"  
        ];

    }


    newDeck() {
        for (let i = 0; i < this.suits.length; ++i) {
            for (let j = 0; j < this.values.length; ++j) {
                let card = {
                name: `${this.values[j]} of ${this.suits[i]}`,
                value: j + 1
                }
                this.deck.push(card)
            }
        }
    }
    


    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; --i) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
        }
    }
}

let team1 = prompt("Enter name for player 1.")
let team2 = prompt("Enter name for player 2.")

class Game {
    constructor(){
        this.player1 = {
            score: 0,
            hand: []
        }
        this.player2 = {
            score: 0,
            hand: []
        }
    }


    playGame() {
        const deck = new Deck
        deck.newDeck()
        deck.shuffleDeck()
    


        while (deck.deck.length !== 0 ) {
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }


        for (let i = 0; i < this.player1.hand.length; ++i) {
            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log(
                    team1 + `'s` + ' ' + "Card:" + ' ' + `${this.player1.hand[i].name}`,
                    team2 + `'s` + ' ' + "Card:" + ' ' + `${this.player2.hand[i].name}`,
                    team1 + ' ' + "Wins a point!",
                    'Current Score:' + ' ' + team1 + " " + `${this.player1.score}` + ", " + team2 + " " + `${this.player2.score}.`)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++
                console.log(
                    team1 + `'s` + ' ' + "Card:" + ' ' + `${this.player1.hand[i].name}`,
                    team2 + `'s` + ' ' + "Card:" + ' ' + `${this.player2.hand[i].name}`,
                    team2  + ' ' + "Wins a point!",
                    'Current Score:' + ' ' + team1 + " " + `${this.player1.score}` + ", " + team2 + " " + `${this.player2.score}.`)
            } else {
                console.log(
                    team1 + `'s` + ' ' + "Card:" + ' ' + `${this.player1.hand[i].name}`,
                    team2 + `'s` + ' ' + "Card:" + ' ' + `${this.player2.hand[i].name}`,
                    "It's a tie! No points awarded.",
                    'Current Score:' + ' ' + team1 + " " + `${this.player1.score}` + ", " + team2 + " " + `${this.player2.score}.`)              
            } 
        }
        
        if (this.player1.score > this.player2.score) {
            console.log(team1 + " " + "Wins!")
        } else if (this.player2.score > this.player1.score) {
            console.log(team2 + " " + "Wins!")
        } else {
            console.log('It is a tie')
        }
    }
}

const test = new Game
test.playGame()