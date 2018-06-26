class Round {
  constructor(deck) {
    this.deck = deck;
    this.id = new Date();
    this.guesses = [];
    this.currentCard = deck[0];
  }

  get count() {
    return this.count;
  }

  addCard(card) {
    this.cards.push(card);
    this.count++;
  }

  removeCard(cardId) {
    this.cards = this.cards.filter(card => card.id !== cardId);
    this.count = this.cards.length;
  }
}


module.exports = Guess;