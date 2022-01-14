//The card suits and values are set up as const variables so they can be used all throughout the code
//as they are needed.

const cardSuits = ["Spade", "Diamond", "Heart", "Club"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

//this here will be used to determine which player used the card with the higher value.
const absoluteCardValue = {
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10" : 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14,

}


class Deck {
    constructor(cards = newDeck()) {
        this.cards = cards
    }
    shuffle() {
        console.log("Let's shuffle our cards!")
        for(let i = this.cards.length - 1; i > 0; i--) {
            const shuffleIndex = Math.floor(Math.random() * (i + 1))
            const oldCardPlacement = this.cards[shuffleIndex]
            this.cards[shuffleIndex] = this.cards[i]
            this.cards[i] = oldCardPlacement
            //This is sort of like shuffling, but what is mostly happening here is that
            // each card is being swapped to the random index of another card.
        }
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function newDeck() {
    return cardSuits.flatMap(suit => {
        return cardValues.map(value => {
            return new Card(suit, value)
        })
    })
}

//This is where we'll be sending both of our player's cards after each turn.

const cardPile = [];

const p1Points = [];
const p2Points = [];

//And this is our two player's decks.


//Right here I'm going to write out all the functions I'll need FOR the game.


function draw() {
    return this.cards.shift();
    //Shift is used because it takes the first element from an array.
    //Therefore it's a bit closer to actually drawing a card off the top of the deck.
};

function cardFlipper() {
    console.log("Players! Draw your card for the round!")
    const p1Card = p1Deck.draw()
    const p2Card = p2Deck.draw()

};



function discard(card) {
    this.cardPile.push(card)
};

function roundCheck(p1Card, p2Card) {
return absoluteCardValue[p1Card.value] > absoluteCardValue[p2Card.value];
}

function gameWin(p1Points, p2Points) {
   return p1Points.length > p2Points.length;
}

//Now, we have our deck possible to be created. Let's make our game's start function.
//It'll run at the beginning in console, as soon as the page is opened the game begins.

startWAR()
function startWAR() {
const deck = new Deck()
deck.shuffle()
console.log(deck.cards);
console.log("Now let's deal the cards to our two players!")
const deckSplit = Math.ceil(deck.cards.length / 2);
p1Deck = new Deck(deck.cards.slice(0, deckSplit))
p2Deck = new Deck(deck.cards.slice(deckSplit, deck.cards.length))

console.log("This is Player 1's Deck!");
console.log(p1Deck);

console.log("This is Player 2's Deck!");
console.log(p2Deck);

for (i = 1; i < 26; i++) {
console.log("Round " + i);
cardFlipper()
console.log(p1Card);
console.log(p2Card);

if (roundCheck(p1Card, p2Card)) {
    console.log("Player 1 wins round " + i);
    discard(p1Card);
    discard(p2Card);
    p1Points.push("W");
} else if (roundCheck(p2Card, p1Card)) {
    console.log("Player 2 wins round " + i);
    discard(p1Card);
    discard(p2Card);
    p2Points.push("W");
} else {
    console.log("It's a draw!");
}
}
console.log("Alright! Impressive skills on display, but we've reached the end of this game!")
console.log("Let's see who won!")
if (gameWin(p1Points, p2Points)) {
    console.log("Player 1 takes the whole game! Congratulations!")
    console.log("Please hit refresh to play again!")
} else if (gameWin(p2Points, p1Points)) {
    console.log("Player 2 takes the whole game! Congratulations!")
    console.log("Please hit refresh to play again!")
} else {
    console.log("I didn't even think this was possible! A draw?...Can I take the trophy then?")
    console.log("Please hit refresh to play again!")
}



}