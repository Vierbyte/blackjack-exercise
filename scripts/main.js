window.addEventListener('DOMContentLoaded', function() {
  // Execute after page load
})
let suites = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let deck = [];

function drawDeck(){
for (let i = 0; i < suites.length; i++) {
  for (let j = 0; j < ranks.length; j++) {
    let card = {Suites: suites[i], Ranks: ranks[j]};
    deck.push(card);
    console.log(card);
  }
  return deck;
  }
}
drawDeck();
console.log(deck);
